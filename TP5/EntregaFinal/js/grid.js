function Grid(imagenes){
  this.imagenes = imagenes;
}

Grid.prototype.armarGrid = function(){
   let contenido = '<ul id="idGrilla" class="grid">';
   for (var l = 0; l < this.imagenes.length; l++) {
         contenido = contenido + '<li class="item" id="img'+ l +'" onclick="jsSlider('+ l +')" ><img src="'+this.imagenes[l][0]+'" title="See Slider"><div><i class="fa fa-twitter" aria-hidden="true">'+this.imagenes[l][1]+'</i></div></li>';
   }
   contenido = contenido + '</ul>';
   document.getElementById("imagenes").innerHTML = contenido;
   //document.getElementById("loading").style.display = 'none';
}
