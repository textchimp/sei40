class DashboardController < ApplicationController


  def app
    # this just loads the app.html.erb where
    # all the JS AJAX hapens
  end


  def uptime
    @up = `uptime`

    # How to get Rails to respond with JSON
    # instead of looking for the uptime.html.erb template?

    response = {
      command: 'uptime',
      output: @up,
      random_numbers: [ 10, 23, 42 ]
    }

    # Don't use the default template, render JSON directly
    # render json: response

    # The same route & controller action can respond with either
    # HTML or JSON data, depending on the request format.
    # The browser specifies this format as a request header, but
    # we can force it by adding '.html' or '.json' to the end
    # of a route path in the browser
    respond_to do |format|
      format.html   # do the default thing, i.e. show ERB template
      format.json { render json: response  }
    end # respond_to


  end # uptime

  def cpu_hog

    hog = `ps xr`.split("\n").second
    date = `date`

    render json: {
      cpuHog: hog,
      currentDate: date
    }

  end # cpu_hog


  def dogs_index
    # deal with CORS errors:
     headers['Access-Control-Allow-Origin'] = '*'

    render json: Dog.all
  end

  def dogs_show
    render json: Dog.find(params[:id])
  end

  def dogs_search
    render json: Dog.where( name: params[:name] )
  end

end
