var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var juego = null;
var discoSelect = null;
var torreSaca = null;
var torrePone = null;
var best = 0;

var isFirefox = typeof InstallTrigger !== 'undefined';
var isChrome = !!window.chrome && !!window.chrome.webstore;
var path = null;
var oldcolor = null;

function jugar(cant){
  juego = new Hanoi(cant);
  juego.draw(ctx);
  document.getElementById("moves").innerHTML = 0;
  juego.best = document.getElementById("best").innerHTML;
  juego.ocultarMsj();
}

canvas.onmousedown = function(e){

   if(isChrome)
      path = e.path[0];
   if(isFirefox)
      path = e.explicitOriginalTarget;

  //torreSaca=juego.getTorreSel(e.clientX);
  torreSaca=juego.getTorreSelFicha(e.clientX,e.clientY);
  //console.log(torreSaca);
  if(torreSaca != null)
    //seteo el disco seleccionado de la torre
    discoSelect=torreSaca.sacar();
  else
    //envio msj de ERROR: ficha mas seleccionada
    juego.verMsj('ERROR: Ficha mal seleccionada','alert-danger');
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


   if( ((path!=e.explicitOriginalTarget) && (path!=null) && (isFirefox)) || ((path!=e.path[0])&&(path!=null)&& (isChrome)) ){
     if(discoSelect!=null){
      //alert('ERROR: Soltaste la ficha fuera del area de juego!!!');
      juego.verMsj('ERROR: Soltaste la ficha fuera del area de juego!!!','alert-danger');
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
           juego.verMsj("Felicitaciones!!!, rompiste tu Record!!!!",'alert-success');
           }
         else{
           juego.verMsj("Has Gando!!!, Pero puedes Mejorar",'alert-success');

         }
         document.getElementById("best").innerHTML = juego.getBest();
       }
     }
     else{
       //la ficha no fue aceptada por la torre xq viola las reglas del juego
       juego.verMsj('ERROR: Movimiento no permitido','alert-danger');
       //actualizo la cantidad de movimientos y actualizo el frontend
       juego.addMove();
       document.getElementById("moves").innerHTML = juego.getMoves();
       torreSaca.poner(discoSelect);
     }
  }
  else{
     juego.verMsj('ERROR: No soltaste la ficha en la torre!!!','alert-danger');
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
