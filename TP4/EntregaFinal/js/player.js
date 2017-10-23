var self;
function Player(){
    this.estado = 'stop';
    this.radio = 60;
    this.posicionX = 150;
    this.posicionY = 483;
    this.player = document.getElementById('runner');
    self=this;
}

Player.prototype.xRight = function(){
   this.player = document.getElementById('runner');
   this.posicionX = this.player.offsetLeft;
  return this.posicionX;
}

Player.prototype.xLeft = function(){
  this.player = document.getElementById('runner');
  this.posicionX = this.player.offsetLeft;
  return this.posicionX+this.radio;
}

Player.prototype.yBottom = function(){
  this.player = document.getElementById('runner');
  this.posicionY = this.player.offsetTop;
  return this.posicionY-this.radio;
}

Player.prototype.yTop = function(){
   this.player = document.getElementById('runner');
   this.posicionY = this.player.offsetTop;
   return this.posicionY;
}

Player.prototype.getX = function(){
   return this.posicionX;
}

Player.prototype.getY = function(){
   return this.posicionY;
}

Player.prototype.getR = function(){
  return this.radio;
}

Player.prototype.getEstado = function(){
  return this.estado;
}


Player.prototype.stop = function(){
  this.estado = 'stop';
  this.player.className = "runner-stop";
  /* animation end y animation start */
  this.player.addEventListener('webkitAnimationEnd',() => {
      this.stop();
  })
}

Player.prototype.jump = function(){
  this.estado = 'jump';
  this.player.className = "runner-jump";
  this.player.addEventListener('webkitAnimationEnd',() => {
     if(ArrowRight==true)
         this.right();
     else if(ArrowUp == true)
         this.jump();
     else
         this.stop();
  });

}

Player.prototype.left = function(){
  this.player.style.transform = 'rotate(360deg)';
  this.estado = 'runner';
  this.player.className = "runner";
}

Player.prototype.right = function(){
  this.estado = 'runner';
  this.player.className = "runner";
}

Player.prototype.down = function(){
  this.estado = 'down';
  this.player.className = "runner-down";
}

Player.prototype.die = function(){
  this.estado = 'die';
  this.player.className = "runner-die";
}
