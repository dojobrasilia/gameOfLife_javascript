
describe 'GameOfLife'

	describe 'alone cell'
		it '0.0 should live when setAlive is used'
			game = new GameOfLife();
			game.isAlive(0,0).should.be false
			game.setAlive(0,0);
			game.isAlive(0,0).should.be true
		end

		it '0.0 should die in the next generation'
			game = new GameOfLife();
			game.setAlive(0,0);
			game.next();
			game.isAlive(0,0).should.be false
		end

		it '0.1 should die in the next generation'
			game = new GameOfLife();
			game.setAlive(0,1);
			game.next();
			game.isAlive(0,1).should.be false
		end
		
		it '1.0 should die in the next generation'
			game = new GameOfLife();
			game.setAlive(1,0);
			game.next();
			game.isAlive(1,0).should.be false
		end
	end
	
	describe 'two neighbours'

		it 'should live in the next generation with 1.1 dead'
			game = new GameOfLife();
			game.setAlive(0,0);
			game.setAlive(0,1);
			game.setAlive(1,0);
			game.next();
			game.isAlive(0,0).should.be true
		end

		it 'should live in the next generation with 0.1 dead'
			game = new GameOfLife();
			game.setAlive(0,0);
			game.setAlive(1,0);
			game.setAlive(1,1);
			game.next();
			game.isAlive(0,0).should.be true
		end

		it 'should live in the next generation 1.0 dead'
			game = new GameOfLife();
			game.setAlive(0,0);
			game.setAlive(0,1);
			game.setAlive(1,1);
			game.next();
			game.isAlive(0,0).should.be true
		end

	end

	// describe 'three neighbours'
	// 
	// 	it 'should revive in the next generation'
	// 		game = new GameOfLife();
	// 		game.setAlive(0,0);
	// 		game.setAlive(0,1);
	// 		game.setAlive(1,0);
	// 		game.next();
	// 		game.isAlive(1,1).should.be true
	// 	end
	// 	
	// 	it 'should revive in the next generation too'
	// 		game = new GameOfLife();
	// 		game.setAlive(1,1);
	// 		game.setAlive(0,1);
	// 		game.setAlive(1,0);
	// 		game.next();
	// 		game.isAlive(0,0).should.be true
	// 	end
	// 
	// end

end