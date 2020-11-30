
class CalculatorController < ApplicationController

  def do_calculation

    @first = params[:first].to_i
    @op = params[:op]
    @second = params[:second].to_i

    # @answer = case @op
    # when '+' then @first + @second
    # when '-' then @first - @second
    # end

    # This works because in Ruby
    # 1 + 2
    # is actually
    # 1.+( 2 )
    # which can be written as
    # 1.send('+', 2)

    @answer = @first.send( @op, @second )

  end # do_calculation()


  def form
    # ??? Just show template
  end


end
