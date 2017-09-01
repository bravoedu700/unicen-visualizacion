function Rect(x, y, c){
  this.x = x;
  this.y = y;
  this.c = c;
}

Rect.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.fillStyle = this.c;
  ctx.fillRect(this.x,this.y,80,140);
  ctx.closePath();
}

Rect.prototype.drawLine = function(ctx,lineWidth) {
  ctx.beginPath();
  ctx.fillRect(this.x,this.y,80,140);
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'square';
  ctx.strockeStyle = '#000000';
  ctx.fillStyle = this.c;
  ctx.stroke();
  ctx.closePath();
}

Rect.prototype.drawGrad = function(ctx) {
  ctx.beginPath();
  bg =ctx.createRadialGradient(this.x,this.y,520,this.x,this.y,0);
  bg.addColorStop(0,this.c);
  bg.addColorStop(1,"#FFFFFF");
  ctx.fillStyle = bg;
  ctx.fillRect(this.x,this.y,30,50);
  ctx.fill();
  ctx.closePath();
}

Rect.prototype.drawImage = function(ctx,myImg,repeat) {
  ctx.beginPath();
  var img = new Image();
  img.src = myImg;
  img.onload = function() {
      var pattern = ctx.createPattern(img,repeat);
      ctx.fillStyle = pattern;
  };
  ctx.fillRect(this.x,this.y,260,180);
  //ctx.fill();
  ctx.closePath();
}
