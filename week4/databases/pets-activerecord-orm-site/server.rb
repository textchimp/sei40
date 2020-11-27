
#test 2
require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'

require 'active_record'

# Set up the ActiveRecord connection to our DB
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',      # What format of DB is this?
  database: 'database.db'  # Where is the actual data?
)

# Show us all the SQL you're writing for us!!
ActiveRecord::Base.logger = Logger.new(STDOUT)

# Tell AR how to talk to our 'pets' table
# To do this, we make a class with the capitalised
# singular name of our table, and that class has to
# inherit from AR
class Pet < ActiveRecord::Base
  belongs_to :owner  # MUST BE SINGULAR! (i.e. use the owner_id column to get to the owner for this pet)
end

class Owner < ActiveRecord::Base
  has_many :pets   # MUST BE PLURAL! (i.e. go into the pets table and use the owner_id column to find out which pets you own)
end


# require 'pry'
# binding.pry




def db_query( sql )

  puts '======================================='
  puts sql
  puts '======================================='

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  results = db.execute sql
  db.close  # clean up after ourselves

  results   #implicit return

end # db_query()



# ROOT ROUTE:
get '/' do
  erb :home
end


# CRUD ROUTES FOR OUR PETS DB:

# Create ===================================

# 1. Show blank form for entering new pet details
get '/pets/new' do
  erb :new
end  # GET /pets/new (blank form)

# 2. Form submits to here (this is the form action URL),
#    where we add the details to the database,
#    and then redirect to another page such as the index
post '/pets' do

  #   insert_sql = "
  #   INSERT INTO pets( name, species, description, roundness, alive, age, image_url )
  #   VALUES (
  #     '#{ params[:name] }',
  #     '#{ params[:species] }',
  #     '#{ params[:description] }',
  #     #{ params[:roundness] },
  #     #{ params[:alive] },
  #     #{ params[:age] },
  #     '#{ params[:image_url] }'
  #   );
  # "
  #   db_query insert_sql

  Pet.create(
    name: params[:name],
    species: params[:species],
    description: params[:description],
    roundness: params[:roundness],
    alive: params[:alive],
    age: params[:age],
    image_url: params[:image_url]
  )


  # After processing this form submit and inserting the
  # details into the DB, we don't want this route to show
  # its own template - what if someone tries to reload?
  # It's safer to redirect to a new page altogether
  redirect '/pets'

end # POST /pets (form submit & insert)


# Read =====================================

# 1. Index - list all the rows in the table
get '/pets' do
  # @pets = db_query 'SELECT * FROM pets;'
  @pets = Pet.all
  erb :index
end  #  GET /pets (index)

# 2. Details (show) - show detailed info for a single row
get '/pets/:id' do

  # Establish a connection to the database, by using
  # Ruby gem, and telling it the name of our DB file
  # db = SQLite3::Database.new 'database.db'
  # db.results_as_hash = true
  # @pet = db.execute "SELECT * FROM pets WHERE id = #{ params[:id] };"
  # @pet = @pet.first  # remove the hash from the array, easier to work with
  # db.close  # clean up after ourselves

  # @pet = db_query "SELECT * FROM pets WHERE id = #{ params[:id] };"
  # @pet = @pet.first  # remove the hash from the array, easier to work with
  @pet = Pet.find params[:id]

  erb :show
end

# Update ===================================

# 1. Show a form whose fields are pre-populated
#    from the item's row in the DB table
get '/pets/:id/edit' do

  # We need to query the DB to get the item data
  # so we can pre-populate the form
  # @pet = db_query "SELECT * FROM pets WHERE id = #{ params[:id] };"
  # @pet = @pet.first  # remove the hash from the array, easier to work with
  @pet = Pet.find params[:id]

  erb :edit
end

# 2. Form submits to here, update the DB, and
#    redirect to the show page
post '/pets/:id' do

    # db_query "UPDATE pets SET
    #   name = '#{ params[:name] }',
    #   species = '#{ params[:species] }',
    #   description = '#{ params[:description] }',
    #   roundness = #{ params[:roundness] },
    #   alive = #{ params[:alive] },
    #   age = #{ params[:age] },
    #   image_url = '#{ params[:image_url] }'
    #   WHERE id = #{ params[:id] };
    # "

    pet = Pet.find params[:id]
    pet.update(
      name: params[:name],
      species: params[:species],
      description: params[:description],
      roundness: params[:roundness],
      alive: params[:alive],
      age: params[:age],
      image_url: params[:image_url]
    )

    redirect "/pets/#{ params[:id] }"

end

# Delete ===================================
get '/pets/:id/delete' do

  # db_query "DELETE FROM pets WHERE id = #{ params[:id] }"
  Pet.destroy params[:id]

  redirect '/pets'  # back to the index
end



#######################################################
# CRUD routes for Owners

# Create


# Read

# 1. index of owners
get '/owners' do

  @owners = Owner.all

  # in Rails, the convention will be nested folders:
  # views/owners/index.erb
  # vs
  # views/pets/index.erb
  erb :owners_index

end

# 2. show page (details) for one owner
get '/owners/:id' do
  @owner = Owner.find params[:id]
  erb :owners_show  # Rails uses nested folders!
end


# Update



# Delete
