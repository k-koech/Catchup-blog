class UsersController < ApplicationController
    # Get users
    get '/homeuser' do
        '<h2>User</h2>'
    end
    
    # Get users
    get '/users' do
        user = User.all
        user.to_json
    end
    
    # Add User
    post '/users' do 
        username =  params[:username]
        email = params[:email]
        phone = params[:phone] 
        # 
        if(username.present? || email.present? || phone.present? )
            user = User.create(username: username,email: email, phone: phone )
            puts("xxxxxxxxxx")
            puts(username.empty?)
            if user
                success = {:success => "User added successfully!"}
                success.to_json
            else
                errors = {:success => "Error adding user!"}
                errors.to_json
            end
        else
            error = {:success => "Ensure that all fields are not null!"}
            error.to_json
        end
    end
    
     # Delete user
    delete '/users/:id' do
        users_count = User.where(id: params[:id]).count()
      
        if users_count>0
            user = User.find(params[:id])
            user.destroy
            message = {:success => "User deleted successfully!"}
            message.to_json
        else
            message = {:error => "User does not exist!"}
            message.to_json
        end
        
    end


  end