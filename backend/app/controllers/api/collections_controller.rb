class Api::CollectionsController < ApplicationController
  before_action :set_collection, only: %i[show update destroy]

  # GET /collections
  def index

    if params[:book_box_id]
      @collections = Collection.includes(:book, :book_box).where(book_box_id: params[:book_box_id])
    elsif params[:book_id]
      @collections = Collection.includes(:book, :book_box).where(book_id: params[:book_id])
    else
      @collections = Collection.includes(:book, :book_box).all
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
    render json: @collection.as_json(include: {
      book_box: {}, 
      book: {}
      }).merge(
        book: @collection.book.as_json.merge(
          cover_url: "https://covers.openlibrary.org/b/olid/#{@collection.book.open_library_cover_key}-L.jpg",
          open_library_url: "https://openlibrary.org#{@collection.book.open_library_key}"
        )
      )
  end

  # POST /collections
  def create
    book_box_id = collection_params[:book_box_id]
    book_id = collection_params[:book_id]

    # Is the BookId supplied as parameter?
    unless book_id
      # Does the book already exist in the database using the Open Library Key.
      book = Book.find_by(open_library_key: collection_params[:open_library_key])

      unless book
        book = Book.create(
          title: collection_params[:title],
          author: collection_params[:author],
          subject: collection_params[:subject],
          open_library_key: collection_params[:open_library_key],
          open_library_cover_key: collection_params[:open_library_cover_key]
        )
      end

      book_id = book.id
    end

    # Check if the combination of CollectionId and BookId already exist.
    @collection = Collection.find_by(book_box_id:book_box_id, book_id:book_id)

    unless @collection
      @collection = Collection.new(collection_params.except(:title, :author, :subject, :open_library_key, :open_library_cover_key).merge(book_id: book_id))

      if @collection.save
        # Success. Response sent below.
      else
        render json: @collection.errors, status: :unprocessable_entity
        return
      end
    end

    render json: @collection.as_json(include: {
      book_box: {}, 
      book: {}
      }).merge(
        book: @collection.book.as_json.merge(
          cover_url: "https://covers.openlibrary.org/b/olid/#{@collection.book.open_library_cover_key}-L.jpg",
          open_library_url: "https://openlibrary.org#{@collection.book.open_library_key}"
        )
      ),
      status: :created
      
    # Send Notifications to the users that have the Book on their Wishlist.
    send_notification
  end

  # PATCH/PUT /collections/1
  def update
    if @collection.update(quantity: params[:quantity])
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
    params.require(:collection).permit(:quantity, :book_id, :book_box_id, :title, :author, :subject, :open_library_key, :open_library_cover_key)
  end

  # Send Notifications to the users that have the Book on their Wishlist.
  def send_notification
    collection = Collection.includes(:book, :book_box).find(@collection[:id])
    collection_hash = collection.as_json(include: {
      book_box: {}, 
      book: {}
      }).merge(
        book: @collection.book.as_json.merge(
          cover_url: "https://covers.openlibrary.org/b/olid/#{@collection.book.open_library_cover_key}-L.jpg",
          open_library_url: "https://openlibrary.org#{@collection.book.open_library_key}"
        )
      )

    wishlists = Wishlist.where(book_id: @collection[:book_id])

    wishlists.each do |wishlist|
      channel = "notifications_#{wishlist.user_id}"
      message = "#{collection_hash["book"]["title"]} is ready at the #{collection_hash["book_box"]["name"]} (#{collection_hash["book_box"]["address"]}) Book Box."
      ActionCable.server.broadcast(
        channel,
        {
        message: message,
        id: @collection[:id],
        collection: collection_hash
        }
      )
    end
  end
end
