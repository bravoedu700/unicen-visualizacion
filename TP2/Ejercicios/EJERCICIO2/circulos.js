function Circle(x, y, r, c){
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;
}

Circle.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.fillStyle = this.c;
  ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
}


Circle.prototype.drawLine = function(ctx,lineWidth) {
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.strockeStyle = 'black';
  ctx.fillStyle = this.c;
  ctx.stroke();
  ctx.closePath();
}

Circle.prototype.drawGrad = function(ctx) {
  ctx.beginPath();
  bg =ctx.createRadialGradient(this.x,this.y,this.r,this.x,this.y,0);
  bg.addColorStop(0,this.c);
  bg.addColorStop(1,"#FFFFFF");
  ctx.fillStyle = bg;
  ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
}

Circle.prototype.drawImage = function(ctx,myImg,repeat) {
  ctx.beginPath();
  var img = new Image();
  img.src = myImg;
  img.onload = function() {
      var pattern = ctx.createPattern(img,repeat);
      ctx.fillStyle = pattern;
  };
  ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
  ctx.fill();
  ctx.closePath();
}
