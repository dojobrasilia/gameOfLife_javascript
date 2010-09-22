
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
				if(!(j==0 && i==0) && this.isAlive(row+i, col+j)){
					count++;
				}
			}
		}
		return count;
	},
	
	apply_rules_for_one_cell: function(row, col, temp_table){
		var neighbors = this.compute_neighbors(row, col)
	
		if (neighbors<2){
			temp_table[row][col] = false;
		}
		else if(neighbors>3){
			temp_table[row][col] = false;
		}else if (neighbors == 3 && !this.isAlive(row, col)){
			temp_table[row][col] = true;
		}else{
			temp_table[row][col] = this.isAlive(row, col);
		}
		return temp_table;
	},

	next: function() {
		
		var temp_table = new Array(this.table.length);
		for(var i = 0; i < this.table.length; i++){
			temp_table[i] = new Array(this.table[0].length);
		}
		
		for(var i=1; i<this.table.length-1; i++){
			for(var j=1; j<this.table[0].length-1; j++){
				temp_table = this.apply_rules_for_one_cell(i,j,temp_table);		
			}
		}
		this.table = temp_table;
	}
}
