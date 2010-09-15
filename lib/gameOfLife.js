
function GameOfLife(){
	this.alive = [[false,false],[false,false]];
}

GameOfLife.prototype.setAlive = function(row, col){
	this.alive[row][col] = true;
}

GameOfLife.prototype.isAlive = function(row,col){
	return this.alive[row][col];
}

GameOfLife.prototype.next = function(){
	
	if (! this.isAlive(0,1)) {
		this.alive[0][0] = false;
	}
}