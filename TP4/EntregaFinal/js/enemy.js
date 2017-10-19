function Enemy(id){
  this.posicionX = screen.width + Math.floor((Math.random() * 500) + 1);
  this.posicionY = 525;
  this.radio = 50;
  this.id = id;
  this.enemy = document.getElementById(id);
  this.enemy.style.left = this.posicionX + 'px';
  this.enemy.style.top = this.posicionY + 'px';
}
Enemy.prototype.getX = function(){
  return this.posicionX;
}
Enemy.prototype.getY = function(){
  return this.posicionY;
}
Enemy.prototype.getR = function(){
  return this.radio;
}
Enemy.prototype.set = function(x,y){
  this.posicionX = x;
  this.posicionY = y;
}
Enemy.prototype.move = function(){
  this.posicionX = this.posicionX-2;
  if((this.posicionX+this.radio) < 0)
    this.posicionX = 1000 + Math.floor((Math.random() * 680) + 1)+ this.radio*2;
  this.enemy.style.left = this.posicionX + 'px';
}

Enemy.prototype.reset = function(){
  this.posicionX = 2000;
}
Enemy.prototype.draw = function(){

}
