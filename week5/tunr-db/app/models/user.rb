class User < ApplicationRecord
  has_many :mixtapes

  # Use the bcrypt gem to encrypt passwords when users create accounts,
  # and store only the encrypted version in the 'users' table
  has_secure_password

end
