class Api::WishlistsController < ApplicationController
  before_action :set_wishlist, only: %i[ show update destroy ]

  # GET /wishlists
  def index
    if params[:user_id]
      @wishlists = Wishlist.includes(:user, :book).where(user_id: params[:user_id])
    else
      @wishlists = Wishlist.includes(:user, :book).all
    end

    @wishlists_with_book_details = @wishlists.map do |wishlist|
      wishlist.as_json(include: { 
        user: {}, 
        book: {} 
      }).merge(
        book: wishlist.book.as_json.merge(
          cover_url: "https://covers.openlibrary.org/b/olid/#{wishlist.book.open_library_cover_key}-L.jpg",
          open_library_url: "https://openlibrary.org#{wishlist.book.open_library_key}"
        )
      )
    end
  
    render json: @wishlists_with_book_details
  end

  # GET /wishlists/1
  def show
    render json: @wishlist.as_json(include: { 
      user: {},
      book: {}
    }).merge(
      book: @wishlist.book.as_json.merge(
        cover_url: "https://covers.openlibrary.org/b/olid/#{@wishlist.book.open_library_cover_key}-L.jpg",
        open_library_url: "https://openlibrary.org#{@wishlist.book.open_library_key}"
      )
    )
  end

  # POST /wishlists
  def create
    @wishlist = Wishlist.new(wishlist_params)

    if @wishlist.save
      render json: @wishlist.as_json(include: {
        user: {}, 
        book: {}
        }).merge(
          book: @wishlist.book.as_json.merge(
            cover_url: "https://covers.openlibrary.org/b/olid/#{@wishlist.book.open_library_cover_key}-L.jpg",
            open_library_url: "https://openlibrary.org#{@wishlist.book.open_library_key}"
          )
        ),
        status: :created
    else
      render json: @wishlist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /wishlists/1
  def update
    if @wishlist.update(wishlist_params)
      render json: @wishlist.as_json(include: {
        user: {}, 
        book: {}
        }).merge(
          book: @wishlist.book.as_json.merge(
            cover_url: "https://covers.openlibrary.org/b/olid/#{@wishlist.book.open_library_cover_key}-L.jpg",
            open_library_url: "https://openlibrary.org#{@wishlist.book.open_library_key}"
          )
        )
    else
      render json: @wishlist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wishlists/1
  def destroy
    @wishlist.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wishlist
      @wishlist = Wishlist.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def wishlist_params
      params.fetch(:wishlist, {})
      params.require(:wishlist).permit(
        :user_id,
        :book_id,
        :title,
        :author,
        :subject,
        :open_library_key,
        :open_library_cover_key
      )
    end
end
 