require 'rails_helper'

RSpec.describe Fruit, type: :feature do

  describe 'Loading the /fruits index' do

    before do

      shelf = Shelf.create name: 'test shelf'
      3.times do |i|
        Fruit.create name: "Fruit number #{i}", shelf_id: shelf.id
      end

      visit fruits_path  # go to /fruits

    end # before

    it 'has the correct heading' do
      expect( page ).to have_css('div#heading', text: 'Fruits of the World')
    end

    it 'lists the fruits from the DB' do
      expect( page ).to have_css('ul > li.item', text: 'Fruit number 1')
    end


  end # Load /fruits

end # describe Fruit features
