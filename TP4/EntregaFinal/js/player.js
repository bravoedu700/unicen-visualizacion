var self;
function Player(){
    this.estado = 'stop';
    this.radio = 60;
    this.posicionX = 150;
    this.posicionY = 483;
    this.player = document.getElementById('runner');
    self=this;
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
  console.log('llego');
  this.estado = 'stop';
  this.player.className = "runner-stop";
  /* animation end y animation start
  this.player.addEventListener('webkitAnimationEnd',() => {
      this.stop();
  })
  */
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
        if(this.getEstado()!='die')
         this.stop();
  });

}

Player.prototype.right = function(){
  this.estado = 'runner';
  this.player.className = "runner";
}

Player.prototype.hurts = function(){
  this.player.className = "runner-hurts";
}


Player.prototype.die = function(){
  this.estado = 'die';
  this.player.className = "runner-die";
}
