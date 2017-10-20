function Enemy(id, posX){
  this.posicionX = posX;
  this.posicionY = 542;
  this.radio = 50;
  this.id = id;
  this.enemy = document.getElementById(id);
  this.enemy.style.left = this.posicionX + 'px';
  this.enemy.style.top = this.posicionY + 'px';
  aux = Math.random() * (10 - 1) + 1;
  if(aux<5)
   this.enemy.style.animation = 'REBOTE 4s infinite';
  else
   this.enemy.style.animation = 'SPIN 2s steps(10, end) infinite';
  this.toco=0;
}

Enemy.prototype.setAnimacion = function(){
   this.enemy = document.getElementById(id);
   aux = Math.random() * (10 - 1) + 1;
   if(aux<5)
    this.enemy.style.animation = 'REBOTE 4s infinite';
   else
    this.enemy.style.animation = 'SPIN 2s steps(10, end) infinite';
}

Enemy.prototype.getX = function(){
  return this.posicionX;
}
Enemy.prototype.getY = function(){
  return this.posicionY;
}

Enemy.prototype.getToco = function(){
  return this.toco;
}

Enemy.prototype.setToco = function(toco){
  this.toco = toco;
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
    this.posicionX = screen.width;
  this.enemy.style.left = this.posicionX + 'px';
}

Enemy.prototype.reset = function(){
  this.posicionX = 1250;
  this.toco=0;
  this.setAnimacion();

}
Enemy.prototype.draw = function(){

}
