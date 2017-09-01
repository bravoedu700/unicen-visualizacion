function Torre(x){
  this.discos = [];
  this.x=x;
}

Torre.prototype.sacar = function() {

}

Torre.prototype.poner = function(disco){
  if(this.aceptar(disco)){
    this.discos[this.discos.length]=disco;
  }
  else {
    alert('ERROR: no se permite este movimiento');
  }

}

Torre.prototype.aceptar = function(disco) {
//siempre apilo de mayor a menor
if(this.discos[this.discos.length].p<disco.p)
  return false;
else
  return true;
}

Torre.prototype.draw = function(disco){
  //se dibuja
  let y = 600;
  for(let i=0;i<this.discos.length;i++){
    this.discos[i].draw(ctx,this.x,y);
    y=y-this.discos[i].espesor;
  }
}

Torre.prototype.cantidadDiscos = function(){
  return this.discos.leng;
}
