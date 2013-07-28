class FeedbackController < ApplicationController
  def GiveFeedback

  	name = params[:feedback][:name] 
    email = params[:feedback][:email] 
    feedback = params[:feedback][:feedback] 
    
    Feedback.insert_feedback(name, email, feedback)

  end

  def ViewFeedbacks

  	page_number = params[:page];

    @feedbacks = Feedback.view_feedbacks(page_number)


  	respond_to do |format|
      format.js
    end 
  end
end
