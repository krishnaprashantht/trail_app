class User < ActiveRecord::Base
	# Include default devise modules. Others available are:
  	# :token_authenticatable, :confirmable,
  	# :lockable, :timeoutable and :omniauthable
  	devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  	# Setup accessible (or protected) attributes for your model
  	attr_accessible :email, :password, :password_confirmation, :remember_me, :role
  	# attr_accessible :title, :body

  	def self.add_user(email, password, role)
		User.create(:email => email, :password => password, :role => role)    
	end
  
	def self.count_users
		User.count	
	end

end
