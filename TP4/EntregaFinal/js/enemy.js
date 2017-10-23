function Enemy(id, newPosx){
  this.posicionX = newPosx;
  this.posicionY = 542;
  this.radio = 20;
  this.id = id;
  this.enemy = document.getElementById(id);
  this.enemy.style.left = this.posicionX + 'px';
  this.enemy.style.top = this.posicionY + 'px';
  

  aux = Math.random() * (10 - 1) + 1;
  if(aux < 5)
   this.enemy.classList.add("saltar");
  else
   this.enemy.classList.add("rotar");

  this.toco=0;
}

Enemy.prototype.setAnimacion = function(){
   this.enemy = document.getElementById(this.id);
   aux = Math.random() * (10 - 1) + 1;
   this.enemy.classList.remove("explotion");
   this.enemy.classList.remove("oculto");
   if(aux<5)
      this.enemy.classList.add("saltar");
   else
      this.enemy.classList.add("rotar");
}

Enemy.prototype.setExploto = function(){
  this.enemy = document.getElementById(this.id);

  this.enemy.classList.remove("rotar");
  this.enemy.classList.remove("saltar");
  this.enemy.classList.add("explotion");

  this.enemy.addEventListener('webkitAnimationEnd',() => {
     this.enemy.classList.remove("explotion");
     this.setOculto();
     this.reset();
  });
}

Enemy.prototype.setOculto = function(){
  this.enemy = document.getElementById(this.id);
  this.enemy.classList.add("oculto");
}

Enemy.prototype.getX = function(){
  //this.enemy = document.getElementById(this.id);
  //this.posicionX = this.enemy.offsetLeft;
  return this.posicionX;
}

Enemy.prototype.getLeft = function(){
  this.enemy = document.getElementById(this.id);
  return this.enemy.offsetLeft;
  //return this.posicionX;
}

Enemy.prototype.getTop = function(){
  this.enemy = document.getElementById(this.id);
  return this.enemy.offsetTop;
  //return this.posicionX;
}

Enemy.prototype.getY = function(){
   this.enemy = document.getElementById(this.id);
   this.posicionY = this.enemy.offsetTop;
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

Enemy.prototype.move = function(velEnemy){
  this.posicionX = this.getX()-velEnemy;
  if((this.posicionX+this.radio) < 0)
    this.reset();
  this.enemy.style.left = this.posicionX + 'px';
}

Enemy.prototype.reset = function(){
  this.posicionX = 1250;
  this.toco=0;
  console.log(this.id);
  this.enemy = document.getElementById(this.id);
  this.enemy.classList.remove("oculto");
  this.setAnimacion();
}

Enemy.prototype.draw = function(){

}
