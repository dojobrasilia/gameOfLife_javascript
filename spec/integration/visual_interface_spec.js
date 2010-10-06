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
				div.find("table").find("td").length.should.be 9
				// div.empty()
				// game = new GameOfLife(4,3,div)	
				// div.find("table").find("tr").length.should.be 4
			end
			
		end
	end		

end
