
require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

# Initialise the Stock library just once
# (and reuse it every time we look up a stock)
StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

# 1. show a blank for for typing stonks into
get '/' do
  erb :form
end

# 2. form submits to here, does lookup, prints results
get '/lookup' do

  params[:stock_code] = "GOOG"
  stock = StockQuote::Stock.quote( params[:stock_code] )

  # p stock   # check in iTerm

  @price = stock.latest_price
  @company = stock.company_name

  @names = [ 'Zara', 'Stacey', 'Alistair' ]

  erb :stock_info
end
