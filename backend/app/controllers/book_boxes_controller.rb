class BookBoxesController < ApplicationController
  before_action :set_book_box, only: %i[ show update destroy ]

  # GET /book_boxes
  def index
    @book_boxes = BookBox.all

    render json: @book_boxes
  end

  # GET /book_boxes/1
  def show
    render json: @book_box
  end

  # POST /book_boxes
  def create
    @book_box = BookBox.new(book_box_params)

    if @book_box.save
      render json: @book_box, status: :created, location: @book_box
    else
      render json: @book_box.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /book_boxes/1
  def update
    if @book_box.update(book_box_params)
      render json: @book_box
    else
      render json: @book_box.errors, status: :unprocessable_entity
    end
  end

  # DELETE /book_boxes/1
  def destroy
    @book_box.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book_box
      @book_box = BookBox.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_box_params
      params.require(:book_box).permit(:name, :address, :latitude, :longitude)
    end
end
