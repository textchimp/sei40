Rails.application.routes.draw do

  # This is our main frontend
  get '/dashboard' => 'dashboard#app'

  get '/uptime' => 'dashboard#uptime'

  # These are all API endpoints (JSON only)
  get '/cpuhog' => 'dashboard#cpu_hog'

  get '/dogs' => 'dashboard#dogs_index'
  get '/dogs/:id' => 'dashboard#dogs_show'

  get '/dogs/search/:name' => 'dashboard#dogs_search'

end
