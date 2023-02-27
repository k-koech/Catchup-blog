class CommentsController < ApplicationController

    # Get Comments
    get '/comments' do
      comments = Comment.all
      comments.to_json(include: [:user, :post])
      # comments.to_json(include: {user: {include: :post}})
    end
  
  # Add Comment
  post '/comments' do 
      comment =  params[:comment]
      user = params[:user]
      post = params[:post]

      if(comment.present? || post.present? || user.present? )
          comment_save = Comment.create(comment: comment, post_id: post, user_id: user )
          if comment_save
              success = {:success => "Comment added successfully!"}
              success.to_json
          else
              errors = {:success => "Error adding comment!"}
              errors.to_json
          end
       
      else
          error = {:success => "Ensure that all fields are not null!"}
          error.to_json
      end
  end

  # Patch
  patch '/comments/:id' do
      check_existence_comment = Comment.exists?(id: params[:id])
      
      if check_existence_comment
          comment = Comment.find_by(id: params[:id])
          comment.update(title: params[:title],content: params[:content])        
          success = {:success => "Comment updated successfully!"}
          success.to_json
      else
          errors = {:error => "Comment not exist!"}
          errors.to_json
      end
  end



   # Delete comment
  delete '/comments/:id' do
      check_existence_comment = Comment.exists?(id: params[:id])
    
      if check_existence_comment
          comment = Comment.find(params[:id])
          comment.destroy
          message = {:success => "Comment deleted successfully!"}
          message.to_json
      else
          message = {:error => "Comment does not exist!"}
          message.to_json
      end
  end




end