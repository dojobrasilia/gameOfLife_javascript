
describe 'GameOfLife'

	describe 'alone cell'
		it '1.1 should die in  the next generation'
			game = new GameOfLife()
			game.setAlive(1,1)
			game.next()
			game.isAlive(1,1).should.be false
		end

	end
	
	

end
