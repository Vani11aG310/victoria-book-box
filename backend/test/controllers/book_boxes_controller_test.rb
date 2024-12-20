require "test_helper"

class BookBoxesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @book_box = book_boxes(:one)
  end

  test "should get index" do
    get book_boxes_url, as: :json
    assert_response :success
  end

  test "should create book_box" do
    assert_difference("BookBox.count") do
      post book_boxes_url, params: { book_box: { address: @book_box.address, latitude: @book_box.latitude, longitude: @book_box.longitude, name: @book_box.name } }, as: :json
    end

    assert_response :created
  end

  test "should show book_box" do
    get book_box_url(@book_box), as: :json
    assert_response :success
  end

  test "should update book_box" do
    patch book_box_url(@book_box), params: { book_box: { address: @book_box.address, latitude: @book_box.latitude, longitude: @book_box.longitude, name: @book_box.name } }, as: :json
    assert_response :success
  end

  test "should destroy book_box" do
    assert_difference("BookBox.count", -1) do
      delete book_box_url(@book_box), as: :json
    end

    assert_response :no_content
  end
end
