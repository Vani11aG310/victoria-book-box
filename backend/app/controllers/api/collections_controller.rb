class Api::CollectionsController < ApplicationController
  before_action :set_collection, only: %i[ show update destroy ]

  # GET /collections
  def index
    @collections = Collection.includes(:book, :book_box).all

    render json: @collections.as_json(include: { book: {}, book_box: {} })
  end

  # GET /collections/1
  def show
    render json: @collection.as_json(include: { book: {}, book_box: {} })
  end

  # POST /collections
  def create
    @collection = Collection.new(collection_params)

    if @collection.save
      render json: @collection, status: :created, location: @collection
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
      params.require(:collection).permit(:quantity)
    end
end