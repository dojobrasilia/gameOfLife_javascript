
/*

For a space that is 'populated':
    Each cell with one or no neighbors dies, as if by loneliness. 
    Each cell with four or more neighbors dies, as if by overpopulation. 
    Each cell with two or three neighbors survives. 
For a space that is 'empty' or 'unpopulated'
    Each cell with three neighbors becomes populate

*/

describe 'GameOfLife'

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
		
		it 'should re-blink'
			game = new GameOfLife(5,5)
			game.setAlive(2,1)
			game.setAlive(2,2)			
			game.setAlive(2,3)
			game.next()
			game.next()
			game.isAlive(1,2).should.be false
			game.isAlive(2,2).should.be true
			game.isAlive(3,2).should.be false
			game.isAlive(2,1).should.be true
			game.isAlive(2,3).should.be true
		end
		
		it 'should be a block forever (on bottom left corner)'
			game = new GameOfLife(5,5)
			game.setAlive(3,0)
			game.setAlive(4,0)			
			game.setAlive(3,1)
			game.setAlive(4,1)			
			game.next()
			game.isAlive(3,0).should.be true
			game.isAlive(4,0).should.be true
			game.isAlive(3,1).should.be true
			game.isAlive(4,1).should.be true
		end
	end 

end
