
function GameOfLife(){
	this.alive = false;
}

GameOfLife.prototype.setAlive = function(){
	this.alive = true;
}

GameOfLife.prototype.isAlive = function(){
	return this.alive;
}

GameOfLife.prototype.next = function(){
	this.alive = false;
}