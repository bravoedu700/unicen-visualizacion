function Torre(pos){
  this.discos = [];
  this.x=pos;
  this.w=300;
}

Torre.prototype.sacar = function() {
  return this.discos.pop();
}

Torre.prototype.poner = function(disco){
  this.discos.push(disco);
}

Torre.prototype.acepta = function(disco) {
  //siempre apilo de mayor a menor
  if(this.discos.length > 0){
    if(this.discos[this.discos.length-1].p > disco.p)
      return true;
    else
      return false;
  }
  else {
    return true;
  }
}

Torre.prototype.draw = function(ctx){
  //dibujar torre
  ctx.strockeStyle="#000000";
  ctx.lineWidth=1;
  ctx.strokeRect(this.x - (this.w/2),0,this.x + (this.w/2),500);

  ctx.beginPath();
  ctx.fillStyle = "#825201";;
  ctx.fillRect(this.x-10,100,20,500);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "#825201";
  l = (this.w/2)-20;
  ctx.fillRect(this.x-l,480,260,20);
  ctx.closePath();

  //se dibuja discos
  var y = 480;
  for(var i=0; i<this.discos.length;i++){
    y=y-this.discos[i].espesor;
    this.discos[i].draw(ctx,this.x,y);
    //this.discos[i].drawImage(ctx,this.x,y,"img/bg.jpg","repeat");
  }
}

Torre.prototype.cantidadDiscos = function(){
  return this.discos.length;
}

Torre.prototype.seleccionada = function(posX){
  //console.log(posX);
minx=this.x+4;
maxx=this.x+27;

//alert('min x:' + minx +' clic:' + posX + 'maxx:' + maxx);

if ((posX >= minx) && (posX <= maxx))
  return true;
else
  return false;
}

Torre.prototype.getTorreFichaSel = function(posX,posY){
  //console.log(posX);
  if(this.cantidadDiscos()>0){
    let minY=574 - this.altoTorre();
    let maxY=594;
    let mitaAnchoTope=this.getAnchoTope()/2;
    let minX= 15 + this.x-mitaAnchoTope;
    let maxX= 15 + this.x+mitaAnchoTope;
    //posY = posY+94;

    //alert('min y:' + minY +' clic:' + posY + 'maxy:' + maxY);
    //alert('min x:' + minX +' clic:' + posX + 'maxx:' + maxX);

    if ((posX >= minX) && (posX <= maxX) && (posY >= minY) && (posY <= maxY))
      return true;
    else
      return false;
  }
  else {
    return false;
  }
}

Torre.prototype.getAnchoTope = function(){
  return this.discos[this.cantidadDiscos()-1].ancho;
}

Torre.prototype.altoTorre = function(){
  let suma=0;
  for(var i=0; i<this.discos.length;i++){
    suma = suma + this.discos[i].espesor;
  }
  return suma;
}
