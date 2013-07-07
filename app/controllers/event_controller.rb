class EventController < ApplicationController
  def AddEvent

    title = params[:event][:title] 
    description = params[:event][:description] 
    district = params[:event][:district] 
    place = params[:event][:place] 
    venue = params[:event][:venue] 
    contact_person = params[:event][:contactperson] 
    contact_number = params[:event][:contactnumber]

    Event.add_event(title, description, district, place, venue, contact_person, contact_number)

  end

  def ViewEventsOptions

    puts "\n\n\n\nInside View Events options\n\n\n\n"

    respond_to do |format|
      format.js
    end 
    #redirect_to :template => "ViewEventsOptions"

  end

  def ViewEvents

    page_number = params[:page];
    #district = params[:event_view][:district] 

    @events = Event.view_events(page_number)


  end

  def ReportEvent
  end

  def ViewReportedEvents
  end

  def DeleteReportedEvents
  end

  def UnmarkReportedEvents
  end
end
