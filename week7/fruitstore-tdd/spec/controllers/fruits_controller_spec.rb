require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  describe 'GET #index' do

    before do

      @shelf = Shelf.create name: 'test shelf'
      3.times do |i|
        Fruit.create name: "Fruit number #{i}", shelf_id: @shelf.id
      end

      # This instance variable is for using in our examples -
      # it's NOT visible to the controller name
      @fruits = Fruit.all

      get :index  # Actually make a page request
    end

    it 'returns HTTP success' do
      expect( response ).to have_http_status( :success )
    end

    it 'renders the index template' do
      expect( response ).to render_template( :index )
    end

    it 'assigns the instance variable @fruits which contains all the fruits in the DB' do
      expect( assigns(:fruits) ).to be
      expect( assigns(:fruits).length ).to eq @fruits.length
      expect( assigns(:fruits).first  ).to be_a Fruit
    end

    it 'assigns to @fruits the DB fruits in reverse order' do
      expect( assigns(:fruits).first.name ).to eq @fruits.last.name
    end

  end # describe GET #index


  describe 'POST to #create' do

    describe 'a fruit with valid information' do

      before do
        # Fake a form POST which creates a new fruit
        post :create, params: {
          fruit: {
            name: 'Strawberry',
            shelf_id: Shelf.create(name: 'test').id
          }
        }

      end # before

      it 'should increase the number of fruits in the DB by 1' do
        expect( Fruit.count ).to eq 1
        expect( Fruit.first.name ).to eq 'Strawberry'
      end

      it 'should redirect to the show action for this fruit' do
        expect( response ).to redirect_to( Fruit.first )
      end

    end # valid


    describe 'a fruit with invalid information' do

      before do
        # Fake a form POST which creates a new fruit
        post :create, params: {
          fruit: {
            name: '', # INVALID!
            shelf_id: Shelf.create(name: 'test').id
          }
        }

      end # before

      it 'does not increase the number of fruits in the DB' do
        expect( Fruit.count ).to eq 0
      end

      it 'renders the #new template' do
        expect( response ).to render_template( :new )
      end


    end # invalid

  end  # describe POST #create




end # end top describe
