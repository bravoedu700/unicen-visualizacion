var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var discoSelect = null;
var torreSaca = null;
var torrePone = null;

function jugar(cant){
  var juego = new Hanoi(cant);
  juego.draw(ctx);
}

canvas.onmousedown = function(e){
  torreSaca=juego.getTorreSel(e.clientX,e.clientY);
  discoSelect=torreSaca.sacar();
}


//muevo el objeto seleccionado
canvas.onmousemove = function(e){
  if(discoSelect!=null){
    juego.draw(ctx);
	 discoSelect.draw(ctx,e.clientX,e.clientY);
  }
}

//quito el objeto selecionado y redibujo el canvas con la posiciones definitiva
canvas.onmouseup = function(e){
    torrePone=juego.getTorreSel(e.clientX,e.clientY);
    if(torrePone.acepta(discoSelect))
      terrePone.poner(discoSelect);
    else {
      alert('ERROR: Movimiento no permitido');
      torre.Saca.poner(discoSelect);
    }
}
