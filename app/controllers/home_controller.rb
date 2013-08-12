class HomeController < ApplicationController

	def index

		@count_users = User.count_users
  
		if @count_users == 0

			puts "\n\n\n\ncount users \n\n\n\n"	

			email = "krishnaprashanth.csse@gmail.com"
			password = "12345678"
			role = "admin"

			User.add_user(email, password, role)

		end

	end

end
