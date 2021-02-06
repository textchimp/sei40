class SecretMailer < ApplicationMailer

  default from: "luke.hammer@generalassemb.ly"

  def welcome(user, secret)
    @user = user #@user will be whatever user we pass in to the 'welcome' method
    @secret = secret
    mail( :to => @user[:email], :subject => "Welcome to Badgertown!", :cc => "luke.hammer@generalassemb.ly" )
  end

end
