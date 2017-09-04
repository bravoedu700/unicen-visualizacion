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
}

canvas.onmousedown = function(e){
  torreSaca=juego.getTorreSel(e.clientX);
  console.log(torreSaca);
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
      if(juego.win()){
          alert("Win");
          if(best > 0){
            if(juego.getMove() < best)
              document.getElementById("best").innerHTML = juego.getMove();
            }
          else {
                document.getElementById("best").innerHTML = juego.getMove();
              }
        }
          moves=document.getElementById("moves").innerHTML;
          moves++;
          document.getElementById("moves").innerHTML=moves;
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
