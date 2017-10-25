var player = new Player();
var juego = new Game(player);

function jugarNew(min,time,speed){
   velEnemySet=speed;
   minutos=min;
   segundos=time;
   juego.hidePopup();
   juego.restart();
   juego.jugar(5);
}

function mostrarOcultar(){
   var elem = document.getElementById('control');
   elem.style.visibility = (elem.style.visibility == "hidden") ? "visible" : "hidden";
}
