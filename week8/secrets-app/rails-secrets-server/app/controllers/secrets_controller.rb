class SecretsController < ApplicationController

  # Disable the form token security check that Rails uses whenever you
  # POST form data to a route - because we need to POST form data from
  # our React frontend, and we don't have the security tokens which
  # Rails generates for us when we use <%= form_with %> helpers
  skip_before_action :verify_authenticity_token, raise: false

  def index
    # We are loading this controller action via a React frontend,
    # so all responses will be JSON data, to be loaded by AJAX
    # requests in our React components' Javascript

    headers['Access-Control-Allow-Origin'] = '*'

    render json: Secret.all
  end

  def create
    # the param 'content' will be provided by the
    # axios.post request we make in our React component,
    # which will get the data from a form input

    headers['Access-Control-Allow-Origin'] = '*'

    secret = Secret.create content: params[:content]

    if secret.persisted?
      # success

      SecretMailer.welcome(
        {
          email: 'textchimp@gmail.com',
          name: 'Freddy Citizen'
        },
        params[:content]
      ).deliver_now

      render json: secret

    else
      render json: { error: 'could not save secret' }
    end


  end # create

end
