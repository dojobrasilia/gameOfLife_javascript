
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
		it 'should create a table that every cell is dead (3x3)'
			game = new GameOfLife(3,3);
			for(i=0; i<3; i++){
				for(j=0; j<3; j++){
					game.isAlive(i,j).should.be false
				}
			}
		end
		
		it 'should create a table that every cell is dead (3x4)'
			game = new GameOfLife(3,4);
			for(i=0; i<3; i++){
				for(j=0; j<4; j++){
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
	end
	
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
	
	describe 'rule of super population'
		it 'shouldnt kill 1.1 in the next generation if there is four neighbors (0.0 , 0.1, 0.2, 1.0)'
			game = new GameOfLife(3,3)
			game.setAlive(1,1)
			game.setAlive(0,0)
			game.setAlive(0,1)			
			game.setAlive(0,2)
			game.setAlive(1,0)
			game.next()
			game.isAlive(1,1).should.be false
		end
		
		it 'shouldnt kill 1.1 in the next generation if there is all possible neighbors'
			game = new GameOfLife(3,3)
			game.setAlive(1,1)
			game.setAlive(0,0)
			game.setAlive(0,1)			
			game.setAlive(0,2)
			game.setAlive(1,0)
			game.setAlive(1,2)
			game.setAlive(2,0)
			game.setAlive(2,1)
			game.setAlive(2,2)
			game.next()
			game.isAlive(1,1).should.be false
		end
	end
	
	describe 'rule of ressurection'
		it 'should ressurect 1.1 in the next generation if there is three neighbors (0.0 , 0.1, 0.2)'
			game = new GameOfLife(3,3)
			game.setAlive(0,0)
			game.setAlive(0,1)			
			game.setAlive(0,2)
			game.next()
			game.isAlive(1,1).should.be true
		end
		
		it 'should ressurect 1.1 in the next generation if there is three neighbors (0.0 , 1.2, 2.1)'
			game = new GameOfLife(3,3)
			game.setAlive(0,0)
			game.setAlive(1,2)			
			game.setAlive(2,1)
			game.next()
			game.isAlive(1,1).should.be true
		end
	end
	
	describe 'mixed rules'
		it 'should blink'
			game = new GameOfLife(5,5)
			game.setAlive(2,1)
			game.setAlive(2,2)			
			game.setAlive(2,3)
			game.next()
			game.isAlive(1,2).should.be true
			game.isAlive(2,2).should.be true
			game.isAlive(3,2).should.be true
			game.isAlive(2,1).should.be false
			game.isAlive(2,3).should.be false
		end
	end 

end
