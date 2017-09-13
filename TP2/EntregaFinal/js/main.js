var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var juego = null;
var discoSelect = null;
var torreSaca = null;
var torrePone = null;
var best = 0;

var path = null;

function jugar(cant){
  juego = new Hanoi(cant);
  juego.draw(ctx);
  document.getElementById("moves").innerHTML = 0;
  juego.best = document.getElementById("best").innerHTML;
}

canvas.onmousedown = function(e){

  path = e.path[0];

  //torreSaca=juego.getTorreSel(e.clientX);
  torreSaca=juego.getTorreSelFicha(e.clientX,e.clientY);
  //console.log(torreSaca);
  if(torreSaca != null)
    //seteo el disco seleccionado de la torre
    discoSelect=torreSaca.sacar();
  else
    //envio msj de ERROR: ficha mas seleccionada
    alert('ERROR: Ficha mal seleccionada');
}


//muevo el objeto seleccionado
canvas.onmousemove = function(e){
  if(discoSelect!=null){
    juego.draw(ctx);
    let anchor = discoSelect.getAncho()/2;
	 discoSelect.draw(ctx,e.clientX-anchor,e.clientY-114);
  }
}

//creo una funcion que cheque si la ficha se suelta dentro del canvas
document.onmouseup = function(e){
   console.log(e);
  if((path!=e.path[0])&&(path!=null)){
    alert('ERROR: Soltaste la ficha fuera del area de juego!!!');
    //agrego un movimiento
    juego.addMove();
    document.getElementById("moves").innerHTML = juego.getMoves();
    torreSaca.poner(discoSelect);
    discoSelect=null;
    torrePone=null;
    torreSaca=null;
    juego.draw(ctx);
  }
}
//quito el objeto selecionado y redibujo el canvas con la posiciones definitiva
canvas.onmouseup = function(e){
  torrePone=juego.getTorreSel(e.clientX);
  //pregunto si la torre acepta la ficha, de ser asi, laagrego y chequeo varias situaciones
  if(torrePone!=null){
     if(torrePone.acepta(discoSelect)){
       torrePone.poner(discoSelect);
       //actualizo la cantidad de movimientos y actualizo el frontend
       juego.addMove();
       document.getElementById("moves").innerHTML = juego.getMoves();
       //pregunto si finalizo el juego
       if(juego.win()){
         //pregunto si rompio el record
         if(juego.breakBest()==1){
           alert("Felicitaciones!!!, rompiste tu Record!!!!");
           }
         else{
           alert("Has Gando!!!, Pero puedes Mejorar");
         }
         document.getElementById("best").innerHTML = juego.getBest();
       }
     }
     else{
       //la ficha no fue aceptada por la torre xq viola las reglas del juego
       alert('ERROR: Movimiento no permitido');
       //actualizo la cantidad de movimientos y actualizo el frontend
       juego.addMove();
       document.getElementById("moves").innerHTML = juego.getMoves();
       torreSaca.poner(discoSelect);
     }
  }
  else{
     alert('ERROR: No soltaste la ficha en la torre!!!');
     //actualizo la cantidad de movimientos y actualizo el frontend
     juego.addMove();
     document.getElementById("moves").innerHTML = juego.getMoves();
     torreSaca.poner(discoSelect);
 }
  //seteo en nul las variables relacionadas con el estado del movimiento de la ficha y re-dibujo eljuego
  discoSelect=null;
  torrePone=null;
  torreSaca=null;
  path=null;
  juego.draw(ctx);
}
