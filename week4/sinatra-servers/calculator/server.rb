
require 'sinatra'
require 'sinatra/reloader'



get '/' do
  # "Hello from the calculator root route"
  erb :intro
end


# 1. Show the blank form (user types and submits form)
get '/calc/form' do
  erb :form
end

# 2. Define a route that the form is submitted to, which
# processes the form data, and prints a results page


get '/calc/:first_num/:op/:second_num' do

  @first = params[:first_num].to_i
  @op = params[:op]
  @second = params[:second_num].to_i

  # if op == '+'
  #   result = first + second
  # elsif op == '-'
  #   result = first - second

  @result = case @op
  when '+' then @first + @second
  when '-' then @first - @second
  when '*' then @first * @second
  when 'div' then @first / @second
  end

  # "Your calculation is: #{ first } #{ op } #{ second } = #{ result } "

  erb :answer

end
