function Enemy(id, newPosx){
   this.posicionX = newPosx;
   this.posicionY = 542;
   this.radio = 20;
   this.id = id;
   this.enemy = document.getElementById(id);
   this.setAnimacion(id);
   this.enemy.style.left = this.posicionX + 'px';
   this.toco=0;
   this.paso=0;
}

Enemy.prototype.setAnimacion = function(id){
   aux = Math.random() * (10 - 1) + 1;
   this.enemy.className = "";
   this.enemy.classList.add("enemy");
   if(aux < 5){
      this.posicionY = 542;
      this.enemy.classList.add("rotar");
   }
   else{
      this.posicionY = 490;
      this.enemy.classList.add("volar");
   }
   this.enemy.style.top = this.posicionY + 'px';
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

Enemy.prototype.getPaso = function(){
  return this.paso;
}

Enemy.prototype.setPaso = function(paso){
  this.paso = paso;
}

Enemy.prototype.getR = function(){
  return this.radio;
}

Enemy.prototype.move = function(velEnemy){
  this.posicionX = this.getX()-velEnemy;
  if((this.posicionX+500) < 0)
    this.reset();
  this.enemy.style.left = this.posicionX + 'px';
}

Enemy.prototype.reset = function(){
  this.posicionX = 950;
  this.enemy.style.left = this.posicionX + 'px';
  this.toco=0;
  this.paso=0;
  this.setAnimacion(this.id);
}
