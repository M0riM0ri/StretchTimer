require 'test_helper'

class TimerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get timer_index_url
    assert_response :success
  end

  test "should get log" do
    get timer_log_url
    assert_response :success
  end

end
