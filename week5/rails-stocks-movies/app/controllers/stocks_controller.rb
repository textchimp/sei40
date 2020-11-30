
class StocksController < ApplicationController

  def form
  end

  # No need to require 'stock_quote'

  def do_lookup

    StockQuote::Stock.new(api_key: 'pk_16a849fd637243a79fff90fa4d42bc5d')

    @stock = StockQuote::Stock.quote params[:stock_code]

    # raise 'hell'

  end


end
