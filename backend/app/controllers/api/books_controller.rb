class Api::BooksController < ApplicationController
  before_action :set_book, only: %i[ show update destroy ]

  # GET /books
  def index
    @books = Book.all.order(title: :asc)

    @books = @books.map do |book|
      book.as_json.merge(
        cover_url: "https://covers.openlibrary.org/b/olid/#{book.open_library_cover_key}-L.jpg",
        open_library_url: "https://openlibrary.org#{book.open_library_key}"
        )
    end

    render json: @books
  end

  # GET /books/1
  def show
    # Fetch the book description from the Open Library API.
    description_service = BookDescriptionService.new(@book.open_library_key)
    book_description = description_service.fetch_description

    render json: @book.as_json.merge(
      cover_url: "https://covers.openlibrary.org/b/olid/#{@book.open_library_cover_key}-L.jpg",
      open_library_url: "https://openlibrary.org#{@book.open_library_key}",
      book_description: book_description
    )
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :open_library_cover_key, :open_library_key, :author, :subject)
    end
end
