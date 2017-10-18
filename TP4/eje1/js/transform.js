var nuclic=1;
function rotarLogo(g){
  g=g*nuclic;
  x=g*2;
  y=g*3;
  document.getElementById("logo").style.transform = "translate("+ x +"px,"+ y +"px) rotate("+ g +"deg)";
  nuclic++;
}


function trancicion(){
  
}
