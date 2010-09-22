
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
	
	compute_neighbors: function(row, col){
		var count = 0;
		for(var i=-1; i<=1; i++){
			for(var j=-1; j<=1; j++){
				if(!(j==0 && i==0) && this.isAlive(1+i, 1+j)){
					count++;
				}
			}
		}
		return count;
	},

	next: function() {
		
		var neighbors = this.compute_neighbors(1,1)
	
		if (neighbors<2){
			this.setDead(1,1);
		}
	}
}
