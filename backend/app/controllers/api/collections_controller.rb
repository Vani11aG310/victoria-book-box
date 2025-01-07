class Api::CollectionsController < ApplicationController
  before_action :set_collection, only: %i[show update destroy]

  # GET /collections
  def index
    @collections = if params[:book_box_id]
                     Collection.includes(:book, :book_box).where(book_box_id: params[:book_box_id])
                   elsif params[:book_id]
                     Collection.includes(:book, :book_box).where(book_id: params[:book_id])
                   else
                     Collection.includes(:book, :book_box).all
                   end

    # render json: @collections.as_json(include: { book: {}, book_box: {} })

    @collections_with_book_details = @collections.map do |collection|
      collection.as_json(include: {
                           book: {},
                           book_box: {}
                         }).merge(
                           book: collection.book.as_json.merge(
                             cover_url: "https://covers.openlibrary.org/b/olid/#{collection.book.open_library_cover_key}-L.jpg",
                             open_library_url: "https://openlibrary.org#{collection.book.open_library_key}"
                           )
                         )
    end

    render json: @collections_with_book_details
  end

  # GET /collections/1
  def show
    render json: @collection.as_json(include: { book: {}, book_box: {} })
  end

  # POST /collections
  def create
    @collection = Collection.new(collection_params)

    if @collection.save
      render json: @collection, status: :created
    else
      render json: @collection.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /collections/1
  def update
    if @collection.update(collection_params)
      render json: @collection
    else
      render json: @collection.errors, status: :unprocessable_entity
    end
  end

  # DELETE /collections/1
  def destroy
    @collection.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_collection
    @collection = Collection.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def collection_params
    params.require(:collection).permit(:quantity, :book_id, :book_box_id)
  end
end
