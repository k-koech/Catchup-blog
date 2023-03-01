require "sinatra"
# require "sinatra/cors"

class ApplicationController < Sinatra::Base
    set :default_content_type, "application/json"
    # register Sinatra::Cors

    # set :allow_origin, "*"
    # set :allow_methods, "GET,PATCH,POST"
    # set :allow_headers, "content-type,if-modified-since"
    # set :expose_headers, "location,link"
   
  

    get '/' do
      '<h2>App Controller</h2>'
    end
  
    # use PostsController

end