# Tell Ruby that we want to use one of the
# pre-installed gem libraries in this
# particular program
# i.e. <script src="js/something.js">

require 'sinatra'

# reload server automatically on changes! 😍
require 'sinatra/reloader'

# Define some routes that our webserver will
# respond to.

# i.e. when this server sees a particular
# request, such as for the root page of
# the site "/", how should it respond?

# We will respond, initially, by sending
# strings of text directly back to the browser


get '/' do
  # Here is where we respond to requests for '/'
  puts "Got a request for / !!!"

  # What we send to the browser is whatever the last line
  # of our 'get' block evaluates to: here, a string
  "HELLO FROM SINATRA"
end  # get '/'


get '/luckynumber' do

  @num = Random.rand 100

  # "<html><head></head><body><h1>Here is your lucky number, you lucky thing: #{num}</h1></body></html>"

  # Go into the 'views' folder (default template location), and find the file called 'lucky.erb'
  # Return the contents of that file!
  erb :lucky

end  # get '/luckynumber'


# get '/hello/kyle' do
#   'Hi there Kyle'
# end

get '/hello/zara' do
  'Hi there Zara'
end

# Respond to any request for "/hello/SOMETHING"
get '/hello/:recipient' do
  "HELLO THERE, #{  params[:recipient]  }"
end
#

get '/hello/:name/:mood' do
  # puts "PARAMS:", params
  # "Hello, #{ params[:name] }, I hope you are #{ params[:mood] }"
  @student_name = params[:name]
  @student_name.upcase!
  erb :mood_ring
end
