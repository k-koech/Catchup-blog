class ApplicationController < Sinatra::Base
    set :default_content_type, "application/json"

    get '/' do
      '<h2>App Controller</h2>'
    end
  
    # use PostsController

end