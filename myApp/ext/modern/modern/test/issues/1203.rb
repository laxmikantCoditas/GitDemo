# To use:
# sudo gem install sinatra json
# 
# To run:
# ruby -rubygems 1203.rb

require 'sinatra'
require 'json'

disable :protection

get '/' do
    content_type :json

    sleep 2
    
    params[:callback] + '([{"value":1,"key":"Item 1"},{"value":2,"key":"Item 2"},{"value":3,"key":"Item 3"},{"value":4,"key":"Item 4"},{"value":5,"key":"Item 5"},{"value":6,"key":"Item 6"},{"value":7,"key":"Item 7"},{"value":8,"key":"Item 8"},{"value":9,"key":"Item 9"},{"value":10,"key":"Item 10"}])'
end