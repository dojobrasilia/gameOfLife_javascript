
describe 'GameOfLife'

	describe 'alone cell'
	
	   it 'should live'
		game = new GameOfLife();
		game.isAlive(0,0).should.be false
		game.setAlive(0,0);
		game.isAlive(0,0).should.be true
	   end
	
	   it 'should die in the next generation'
		game = new GameOfLife();
		game.setAlive(0,0);
		game.next();
		game.isAlive(0,0).should.be false
	   end
	
	end

end