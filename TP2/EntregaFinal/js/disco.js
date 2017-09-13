function Disco(p){
  this.p = p;
  this.espesor = 40;
  this.color = this.randomizeColor();
  this.ancho = p * 22 + 10;
}

Disco.prototype.getAncho = function(){
  return this.ancho;
}

Disco.prototype.getEspesor = function(){
  return this.espesor;
}

Disco.prototype.draw = function(ctx, x, y) {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(x-(this.ancho/2),y,this.ancho,this.espesor);
  ctx.closePath();
}

Disco.prototype.drawImage = function(ctx,x,y,myImg,repeat) {
  ctx.beginPath();
  var img = new Image();
  img.src = myImg;
  img.onload = function() {
      var pattern = ctx.createPattern(img,repeat);
      ctx.fillStyle = pattern;
  };

  ctx.fillRect(x-(this.ancho/2),y,this.ancho,this.espesor);
  //ctx.fill();
  ctx.closePath();
}

Disco.prototype.randomizeColor = function(){ //function name
  var color = ''; // hexadecimal starting symbol
  var letters = ['rgba(0,127,110,0.9)','rgba(120,222,110,0.9)','rgba(0,127,110,0.9)','rgba(123,127,10,0.9)','rgba(0,127,200,0.9)','rgba(215,40,40,0.8)','rgba(102,44,207,0.9)','rgba(102, 239, 56,0.9)']; //Set your colors here
  color += letters[Math.floor(Math.random() * letters.length)];
  return color;
}
