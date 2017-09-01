function Hanoi(c){
  this.torres1 = new Torre();
  this.torres2 = new Torre();
  this.torres3 = new Torre();
  this.cantidadDiscos = c;
  for(let i = 0 ; i<this.cantidadDiscos; i++){
    let d = new Disco(this.cantidadDiscos-i);
    this.torres1.poner(d);
  }
}


Hanoi.prototype.draw = function(disco){
  //se dibuja

}
