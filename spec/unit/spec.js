
/*

For a space that is 'populated':
    Each cell with one or no neighbors dies, as if by loneliness. 
    Each cell with four or more neighbors dies, as if by overpopulation. 
    Each cell with two or three neighbors survives. 
For a space that is 'empty' or 'unpopulated'
    Each cell with three neighbors becomes populate

*/

describe 'GameOfLife'

	describe 'configuration'
		it 'should create a table that every cell is dead'
			game = new GameOfLife(3,3);
			for(i=0; i<3; i++){
				for(j=0; j<3; j++){
					game.isAlive(i,j).should.be false
				}
			}
		end
		
		it 'should set a cell as alive'
			game = new GameOfLife(3,3);
			game.setAlive(1,1)
			game.isAlive(1,1).should.be true
		end
	end

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
	end
	
	describe 'rule of survivors'
		it 'shouldnt kill 1.1 in the next generation if there is two neighbor'
			game = new GameOfLife(3,3)
			game.setAlive(1,1)
			game.setAlive(1,2)
			game.setAlive(2,0)
			game.next()
			game.isAlive(1,1).should.be true
		end
	end 
	
	

end
