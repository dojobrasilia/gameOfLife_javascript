
function GameOfLife(){
	this.alive = [[false,false],[false,false]];
}

GameOfLife.prototype = {

	setAlive: function(row, col) {},

	isAlive: function(row,col) {
		return false;
	},

	next: function() {}
}
