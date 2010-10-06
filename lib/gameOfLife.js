
function GameOfLife(rows, cols, div){
	this.table = new Array(rows);
	for(var i = 0; i < rows; i++){
		this.table[i] = new Array(cols);
		for (var j = 0 ; j < cols; j++){
			this.setDead(i,j);
		}
	}
	if (div){
		this.div = div;
		var table = $("<table border='1'></table>");
		div.append(table);
		
		for(var i = 0; i < rows; i ++){
			var row = $("<tr></tr>");
			for(var j = 0; j < cols; j ++){
				var col = $("<td>&nbsp;</td>");
				row.append(col);
				
			}
			table.append(row);
		}
		
	}
}

GameOfLife.prototype = {
	setAlive: function(row, col) {
		this.table[row][col] = true;
		if (this.div) {
			this.div.find("table").find("tr:nth-child("+(row+1)+")").find("td:nth-child("+(col+1)+")").text('X');
		}
	},

	isAlive: function(row,col) {
		if(row < 0 || row >= this.table.length) return false;
		if(col < 0 || col >= this.table.length) return false;
		return this.table[row][col];
	},

	setDead: function(row,col){
		this.table[row][col] = false;
		if (this.div) {
			this.div.find("table").find("tr:nth-child("+(row+1)+")").find("td:nth-child("+(col+1)+")").html('&nbsp;');
		}
	},
	
	//TODO dont like this name too
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
	
	// TODO is this name good?
	// TODO should we pass the table here?
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
		
		for(var i=0; i<this.table.length; i++){
			for(var j=0; j<this.table[0].length; j++){
				temp_table = this.apply_rules_for_one_cell(i,j,temp_table);		
			}
		}
		
		for(var i=0; i<this.table.length; i++){
			for(var j=0; j<this.table[0].length; j++){
				if(temp_table[i][j]) 
					this.setAlive(i,j);	
				else
					this.setDead(i,j);
			}
		}
		
	}
}
