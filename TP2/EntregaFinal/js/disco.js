function Disco(p){
  this.p = p;
  this.espesor = 40;
  this.color = this.randomizeColor();
  this.ancho = p * 22 + 10;
}

Disco.prototype.draw = function(ctx, x, y) {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(x-(this.ancho/2),y,this.ancho,this.espesor);
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

Disco.prototype.randomizeColor = function(){ //function name
  var color = ''; // hexadecimal starting symbol
  var letters = ['rgba(0,127,110,0.7)','rgba(0,127,110,0.7)','rgba(0,127,110,0.7)','rgba(0,127,110,0.7)','rgba(0,127,110,0.7)','rgba(0,127,110,0.7)','rgba(0,127,110,0.7)','rgba(0,127,110,0.7)']; //Set your colors here
  color += letters[Math.floor(Math.random() * letters.length)];
  return color;
}
