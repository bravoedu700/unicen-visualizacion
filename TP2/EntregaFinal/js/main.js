var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var juego = null;
var discoSelect = null;
var torreSaca = null;
var torrePone = null;
var best = 0;

function jugar(cant){
  juego = new Hanoi(cant);
  juego.draw(ctx);
  document.getElementById("moves").innerHTML = 0;
  juego.best = document.getElementById("best").innerHTML;
}

canvas.onmousedown = function(e){
  torreSaca=juego.getTorreSel(e.clientX);
  //console.log(torreSaca);
  if(torreSaca.cantidadDiscos()>0)
    //seteo el disco seleccionado de la torre
    discoSelect=torreSaca.sacar();
  else
    //envio msj de ERROR: torre seleccionada vacia
    alert('ERROR: torre vacia');
}


//muevo el objeto seleccionado
canvas.onmousemove = function(e){
  if(discoSelect!=null){
    juego.draw(ctx);
    resx=torreSaca.w/2;
	  discoSelect.draw(ctx,e.clientX-resx,e.clientY);
  }
}

//quito el objeto selecionado y redibujo el canvas con la posiciones definitiva
canvas.onmouseup = function(e){
    torrePone=juego.getTorreSel(e.clientX,e.clientY);
    if(torrePone.acepta(discoSelect)){
      torrePone.poner(discoSelect);
      juego.addMove();
      console.log(juego);
      document.getElementById("moves").innerHTML = juego.getMoves();
      if(juego.win()){
            if(juego.breakBest()==1){
              alert("Felicitaciones!!!, rompiste tu Record!!!!");
            }
            else {
              alert("Has Gando!!!, Pero puedes Mejorar");
            }
        document.getElementById("best").innerHTML = juego.getBest();
      }
    }
    else {
      alert('ERROR: Movimiento no permitido');
      torreSaca.poner(discoSelect);
    }

    discoSelect=null;
    torrePone=null;
    torreSaca=null;
    juego.draw(ctx);
}
