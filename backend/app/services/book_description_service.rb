class BookDescriptionService
  def initialize(open_library_key)
    @open_library_key = open_library_key
  end

  def fetch_description
    connection = Faraday.new(url: "https://openlibrary.org")
    response = connection.get("#{@open_library_key}.json")

    parsed_response = JSON.parse(response.body)
    book_description = parsed_response["description"]

    # Some descriptions are nested in a hash. If so, extract the value.
    if book_description.is_a?(Hash)
      book_description = book_description["value"]
    end
    book_description
  end
end