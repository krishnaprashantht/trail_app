class Event < ActiveRecord::Base
	attr_accessible :contact_number, :contact_person, :description, :district, :place, :title, :venue

  	def self.add_event(title, description, district, place, venue, contact_person, contact_number)

		Event.create(:title => title, :description => description, :district => district, :place => place, :venue => venue, :contact_person => contact_person, :contact_number => contact_number)    

	end

	def self.view_events(page_number)
				
		Event.paginate(:order =>"created_at DESC",:page => page_number, :per_page => 4)
		
	end

end
