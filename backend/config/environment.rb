
# Environmental variable used by some of the Rake tasks to determine
# if our app is running in test, dev or in prod 
ENV["RACK_ENV"] ||= "development"

# Require in gems
require 'bundler/setup'
Bundler.require(:default, ENV["RACK_ENV"])

# Require in all files in app directory
require_all 'app'

# require_all 'app/models'
