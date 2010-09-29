describe 'GameOfLife'

	describe 'visual interface'
		describe 'constructor'
			it 'should draw the board in html'
				div = $("#happy_board")
				game = new GameOfLife(3,3,div)
				div.find("table").length.should.be 1
			end
		end
	end		

end
