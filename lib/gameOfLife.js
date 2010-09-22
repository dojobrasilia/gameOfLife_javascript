
function GameOfLife(rows, cols){
	this.table = new Array(rows);
	for(var i = 0; i < rows; i++){
		this.table[i] = new Array(cols);
		for (var j = 0 ; j < cols; j++){
			this.setDead(i,j);
		}
	}
}

GameOfLife.prototype = {
	setAlive: function(row, col) {
		this.table[row][col] = true;
	},

	isAlive: function(row,col) {
		return this.table[row][col];
	},

	setDead: function(row,col){
		this.table[row][col] = false;
	},

	next: function() {
		if (!(this.isAlive(1,2) && this.isAlive(2,0))){
			this.setDead(1,1);
		}
	}
}
