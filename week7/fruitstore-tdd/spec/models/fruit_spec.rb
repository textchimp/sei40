require 'rails_helper'

RSpec.describe Fruit, type: :model do

  # This code runs anew before EACH 'it' example
  before do

    @shelf = Shelf.create name: 'test shelf'

    Pear.create name: 'nashi', price: 2, shelf_id: @shelf.id

    # Needs to be an instance variable so that all of
    # the 'it' example blocks can see it
    @fruit_retrieved = Pear.first

  end # before

  # an 'example': an 'it' block which tests
  # some single aspect of code behaviour
  it 'should create a valid fruit object' do
    # Arrange, Act, Assert
    # Assert:
    expect( @fruit_retrieved ).to_not be_nil  # check not nil
    expect( @fruit_retrieved ).to be_a Fruit  # check it's a Fruit instance

  end


  it 'should remember its name' do
    # implicit Fruit.destroy_all happening after each example!
    expect( @fruit_retrieved.name ).to eq 'nashi'
  end


  it 'should remember its price' do
    expect( @fruit_retrieved.price ).to eq 2
  end

  it 'should remember its class via Single Table Inheritance' do

    expect( @fruit_retrieved.class ).to eq Pear
    expect( @fruit_retrieved ).to be_a Pear

  end

  it 'should not consider Fruits to be Pears' do
    # What will the count of Pears be at this point?
    expect( Pear.count ).to eq 1
    Fruit.create name: 'basic fruit'
    expect( Pear.count ).to eq 1
  end


  it 'should be squishy (if a Pear)' do
    expect( @fruit_retrieved.squishy? ).to eq true
  end

  # Test model validations

  it 'should fail validation when created without a name' do
    pear = Pear.create  # no name! should fail!
    expect( pear ).to be_invalid
  end


  it 'should validate the uniqueness of the name' do
    pear_duplicate = Pear.create name: 'nashi'
    expect( pear_duplicate ).to be_invalid
  end

  # Test that a Fruit belongs_to a Shelf
  it { should belong_to(:shelf) }



end # end of top-level describe block
