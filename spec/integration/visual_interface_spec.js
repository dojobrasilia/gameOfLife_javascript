describe 'GameOfLife'

	describe 'visual interface'
		describe 'constructor'
			before_each
				div = $("#happy_board")
				div.empty();
			end
		
			it 'should draw the board in html'
				game = new GameOfLife(3,3,div)
				div.find("table").length.should.be 1
			end

				it 'should draw the right number of lines'
					game = new GameOfLife(3,3,div)	
					div.find("table").find("tr").length.should.be 3
					div.empty()
					game = new GameOfLife(4,3,div)	
					div.find("table").find("tr").length.should.be 4
				end

			it 'should draw the right number of cols'
				game = new GameOfLife(3,3,div)	
				div.find("table").find("td").length.should.be (3*3)
				div.empty()
				game = new GameOfLife(3,4,div)	
				div.find("table").find("td").length.should.be (3*4)
			
			end
			
			it 'should add a live cell to the table'
				game = new GameOfLife(3,3,div)
				game.setAlive(1,1)
				div.find("table").find("tr:nth-child(2)").find("td:nth-child(2)").text().should.be 'X'

				game.setAlive(1,2)
				div.find("table").find("tr:nth-child(2)").find("td:nth-child(3)").text().should.be 'X'
			end
			
			it 'should remove a live cell from the table'
				game = new GameOfLife(3,3,div)
				game.setAlive(1,1)
				game.setDead(1,1)
				div.find("table").find("tr:nth-child(2)").find("td:nth-child(2)").html().should.be '&nbsp;'
				game.setAlive(1,2)
				game.setDead(1,2)
				div.find("table").find("tr:nth-child(2)").find("td:nth-child(3)").html().should.be '&nbsp;'
			end
			
			it 'should blink in the html'
				game = new GameOfLife(3,3,div)
				game.setAlive(1,0)
				game.setAlive(1,1)
				game.setAlive(1,2)
				game.next();
				div.find("table").find("tr:nth-child(1)").find("td:nth-child(2)").html().should.be 'X'
				div.find("table").find("tr:nth-child(3)").find("td:nth-child(2)").html().should.be 'X'
				div.find("table").find("tr:nth-child(2)").find("td:nth-child(1)").html().should.be '&nbsp;'
				div.find("table").find("tr:nth-child(2)").find("td:nth-child(3)").html().should.be '&nbsp;'
				
			end
			
		end
	end		

end
