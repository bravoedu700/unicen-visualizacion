function Player(){
    this.estado = 'stop';
    this.radio = 83;
    this.posicionX = 150;
    this.posicionY = 483;
    this.player = document.getElementById('runner');
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

Player.prototype.stop = function(){
  this.estado = 'stop';
  this.player.className = "runner-stop";
  /* animation end y animation start */
  this.player.addEventListener('webkitAnimationEnd',function(){
      this.player.front();
  })
}

Player.prototype.jump = function(){
  this.estado = 'jump';
  this.player.className = "runner-jump";
  this.player.style.top = (this.player.style.top-55) + 'px';

}

Player.prototype.left = function(){
  this.estado = 'left';
  this.player.className = "runner-left";
}

Player.prototype.right = function(){
  this.estado = 'right';
  this.player.className = "runner-right";
}

Player.prototype.down = function(){
  this.estado = 'down';
  this.player.className = "runner-down";
}

Player.prototype.die = function(){
  this.estado = 'die';
  this.player.className = "runner-die";
}
