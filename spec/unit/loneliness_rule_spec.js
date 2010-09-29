
/*

For a space that is 'populated':
    Each cell with one or no neighbors dies, as if by loneliness. 
    Each cell with four or more neighbors dies, as if by overpopulation. 
    Each cell with two or three neighbors survives. 
For a space that is 'empty' or 'unpopulated'
    Each cell with three neighbors becomes populate

*/

describe 'GameOfLife'


	describe 'rule of loneliness'
		it 'should kill 1.1 in the next generation if there is no neighbor'
			game = new GameOfLife(3,3)
			game.setAlive(1,1)
			game.next()
			game.isAlive(1,1).should.be false
		end

		it 'should kill 1.1 in the next generation if there is one neighbor '
			game = new GameOfLife(3,3)
			game.setAlive(1,1)
			game.setAlive(1,2)
			game.next()
			game.isAlive(1,1).should.be false
		end
		
		it 'should kill 1.2 in the next generation if there is no neighbor'
			game = new GameOfLife(3,4)
			game.setAlive(1,2)
			game.next()
			game.isAlive(1,2).should.be false
		end
		
		it 'should kill 1.2 in the next generation if there is one neighbor '
			game = new GameOfLife(3,4)
			game.setAlive(1,2)
			game.setAlive(1,1)
			game.next()
			game.isAlive(1,2).should.be false
		end
		
		it 'should kill a cell in the left border'
			game = new GameOfLife(3,3)
			game.setAlive(1,0)
			game.next()
			game.isAlive(1,0).should.be false
		end
		
		it 'should kill a cell in the right border'
			game = new GameOfLife(3,3)
			game.setAlive(1,2)
			game.next()
			game.isAlive(1,2).should.be false
		end
		
		it 'should kill a cell in the upper border'
			game = new GameOfLife(3,3)
			game.setAlive(0,1)
			game.next()
			game.isAlive(0,1).should.be false
		end
		
		it 'should kill a cell in the bottom border'
			game = new GameOfLife(3,3)
			game.setAlive(2,1)
			game.next()
			game.isAlive(2,1).should.be false
		end
		
		it 'should kill a cell in the upper left corner'
			game = new GameOfLife(3,3)
			game.setAlive(0,0)
			game.next()
			game.isAlive(0,0).should.be false
		end
	end
	

end
