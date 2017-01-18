require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get about" do
    get static_pages_about_url
    assert_response :success
  end

  test "should get books" do
    get static_pages_books_url
    assert_response :success
  end

  test "should get tools" do
    get static_pages_tools_url
    assert_response :success
  end

end
