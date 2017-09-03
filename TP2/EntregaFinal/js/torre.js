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

Torre.prototype.aceptar = function(disco) {
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

  //se dibuja discos
  let y = 600;
  for(var i=0; i<this.discos.length;i++){
    y=y-this.discos[i].espesor;
    this.discos[i].draw(ctx,this.x,y);

  }
}

Torre.prototype.cantidadDiscos = function(){
  return this.discos.leng;
}

Torre.prototype.seleccionada = function(posX,posY){
if((posX>this.x-this.w/2)&&(posX<this.x+this.w/2))
  return true;
else
  return false;
}
