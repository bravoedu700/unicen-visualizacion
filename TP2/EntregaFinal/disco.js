function Disco(p){
  this.p = p;
  this.espesor = 100;
}

Disco.prototype.draw = function(ctx, x, y) {
  ctx.beginPath();
  ctx.fillStyle = this.c;
  ctx.fillRect(((x-(100*this.p))/2),y,100*this.p,this.espesor);
  ctx.closePath();
}


Disco.prototype.drawImage = function(ctx,myImg,repeat) {
  ctx.beginPath();
  var img = new Image();
  img.src = myImg;
  img.onload = function() {
      var pattern = ctx.createPattern(img,repeat);
      ctx.fillStyle = pattern;
  };
  ctx.fillDisco(this.x,this.y,260,180);
  //ctx.fill();
  ctx.closePath();
}
