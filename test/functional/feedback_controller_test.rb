require 'test_helper'

class FeedbackControllerTest < ActionController::TestCase
  test "should get GiveFeedback" do
    get :GiveFeedback
    assert_response :success
  end

  test "should get ViewFeedbacks" do
    get :ViewFeedbacks
    assert_response :success
  end

end
