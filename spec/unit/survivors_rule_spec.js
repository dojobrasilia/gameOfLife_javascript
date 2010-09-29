
/*

For a space that is 'populated':
    Each cell with one or no neighbors dies, as if by loneliness. 
    Each cell with four or more neighbors dies, as if by overpopulation. 
    Each cell with two or three neighbors survives. 
For a space that is 'empty' or 'unpopulated'
    Each cell with three neighbors becomes populate

*/

describe 'GameOfLife'

	describe 'rule of survivors'
		it 'shouldnt kill 1.1 in the next generation if there is two neighbors (1.2 , 2.0)'
			game = new GameOfLife(3,3)
			game.setAlive(1,1)
			game.setAlive(1,2)
			game.setAlive(2,0)
			game.next()
			game.isAlive(1,1).should.be true
		end
		
		it 'shouldnt kill 1.1 in the next generation if there is two neighbors (1.2 , 2.1)'
			game = new GameOfLife(3,3)
			game.setAlive(1,1)
			game.setAlive(1,2)
			game.setAlive(2,1)
			game.next()
			game.isAlive(1,1).should.be true
		end
		
		it 'shouldnt kill 1.1 in the next generation if there is two neighbors (0.0 , 2.2)'
			game = new GameOfLife(3,3)
			game.setAlive(1,1)
			game.setAlive(0,0)
			game.setAlive(2,2)
			game.next()
			game.isAlive(1,1).should.be true
		end
		
		it 'shouldnt kill 1.1 in the next generation if there is three neighbors (0.0 , 2.2, 1.0)'
			game = new GameOfLife(3,3)
			game.setAlive(1,1)
			game.setAlive(0,0)
			game.setAlive(1,0)			
			game.setAlive(2,2)
			game.next()
			game.isAlive(1,1).should.be true
		end
		
		it 'shouldnt kill 1.1 in the next generation if there is three neighbors (0.0 , 2.2, 0.2)'
			game = new GameOfLife(3,3)
			game.setAlive(1,1)
			game.setAlive(0,0)
			game.setAlive(0,2)			
			game.setAlive(2,2)
			game.next()
			game.isAlive(1,1).should.be true
		end
	end 
	
end
