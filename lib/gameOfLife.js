
function GameOfLife(){
	this.alive = [[false,false],[false,false]];
}

GameOfLife.prototype = {

	setAlive: function(row, col) {
		this.alive[row][col] = true;
	},

	isAlive: function(row,col) {
		return this.alive[row][col];
	},

	next: function() {
		if (!this.isAlive(0,0) && !this.isAlive(1,0)) {
			this.alive[0][1] = false;
		}
		
		if (!this.isAlive(0,1) && !this.isAlive(1,1)) {
			this.alive[1][0] = false;
		}
		
		if (! this.isAlive(0,1)) {
			this.alive[0][0] = false;
		}
		
		if (this.isAlive(1,1)){
			this.alive[0][0] = true;
		}
	}
}