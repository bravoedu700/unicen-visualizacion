var angulo = 0;
var velocidad = 1000;

function rotar(){

  setInterval(function(){
    angulo = angulo - 6;
    document.getElementById('milogo').style.transform = "rotate("+angulo+"rad)";
  }, velocidad);




}
