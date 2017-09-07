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
  ctx.strokeRect(this.x - (this.w/2),0,this.x + (this.w/2),600);

  ctx.beginPath();
  ctx.fillStyle = "#825201";;
  ctx.fillRect(this.x-10,100,20,600);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "#825201";
  l = (this.w/2)-20;
  ctx.fillRect(this.x-l,580,260,20);
  ctx.closePath();

  //se dibuja discos
  let y = 580;
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
if ((posX > this.x-(this.w)) && (posX < this.x+(this.w)))
  return true;
else
  return false;
}

Torre.prototype.altoTorre = function(){
  let suma=0;
  for(var i=0; i<this.discos.length;i++){
    suma = suma + this.discos[i].espesor;
  }
  return suma;
}
