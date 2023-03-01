class PostsController < ApplicationController
    # Define controller-specific routes and methods here
    # Get users
    get '/posts' do
      posts = Post.all
      posts.to_json(include: [:user, comments: {include: :user}])
    end
  
  # Add Post
  post '/posts' do 
      title =  params[:title]
      content = params[:content]
      user_id = params[:user]

      puts("Title ",params[:title])
      puts("Content ",content)
      puts("User ",user_id)
      

      if(title.present? || content.present? || user_id.present? )
        users_count = User.where(id: user_id).count()
        if users_count>0
          post = Post.create(title: title,content: content, user_id: user_id )
          if post
              success = {:success => "Post added successfully!"}
              success.to_json
          else
              errors = {:success => "Error adding post!"}
              errors.to_json
          end
        else
          message = {:error => "User does not exist!"}
          message.to_json
        end
      else
          error = {:error  => "Ensure that all fields are not null!"}
          error.to_json
      end
  end

  # Patch
  patch '/posts/:id' do
      check_existence_post = Post.exists?(id: params[:id])
      
      if check_existence_post
          post = Post.find_by(id: params[:id])
          post.update(title: params[:title],content: params[:content])        
          success = {:success => "Post updated successfully!"}
          success.to_json
      else
          errors = {:error => "Post not exist!"}
          errors.to_json
      end
  end



   # Delete Post
  delete '/posts/:id' do
      check_existence_post = Post.exists?(id: params[:id])
    
      if check_existence_post
          post = Post.find(params[:id])
          post.destroy
          message = {:success => "Post deleted successfully!"}
          message.to_json
      else
          message = {:error => "Post does not exist!"}
          message.to_json
      end
  end


  end
