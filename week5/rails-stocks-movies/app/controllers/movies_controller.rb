
class MoviesController < ApplicationController

  def search_form
  end # search_form()

  def search

    url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{ params[:search_text] }"
    puts url
    @movies = HTTParty.get url

    # raise 'hell'

  end # search()

end  # MoviesController
