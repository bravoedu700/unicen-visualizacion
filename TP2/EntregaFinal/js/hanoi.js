function Hanoi(c){
  this.torre1 = new Torre(150);
  this.torre2 = new Torre(450);
  this.torre3 = new Torre(750);
  this.moves = 0;
  this.cantidadDiscos = c;
  for(let i=0 ; i<this.cantidadDiscos; i++){
    let d = new Disco(this.cantidadDiscos-i);
    this.torre1.poner(d);
  }
}

Hanoi.prototype.getTorreSel = function(x){

  if(this.torre1.seleccionada(x))
    return this.torre1;

  else if(this.torre2.seleccionada(x))
    return this.torre2;

  else if(this.torre3.seleccionada(x))
    return this.torre3;

  else return null;

}

Hanoi.prototype.draw = function(ctx){
  //dibujar bacgroun del juego
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //se dibuja
  this.torre1.draw(ctx);
  this.torre2.draw(ctx);
  this.torre3.draw(ctx);

}

Hanoi.prototype.hasDisc = function(x,y){
  if((this.torre1.clickeado(x,y)) && (this.torre1.hasDisc()))
    return true;
  else if((this.torre2.clickeado(x,y)) && (this.torre2.hasDisc()))
    return true;
  else if((this.torre3.clickeado(x,y)) && (this.torre3.hasDisc()))
    return true;
  else
    return false;
}


Hanoi.prototype.win = function(){
  if(this.cantidadDiscos == this.torre3.cantidadDiscos())
    return true;
  else
    return false;
}

Hanoi.prototype.move = function(){
  this.moves++;
  document.getElementById("moves").innerHTML = this.moves;
}

Hanoi.prototype.getMove = function(){
  return this.moves;
}
