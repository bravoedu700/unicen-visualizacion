function Slider(imagenes){
  this.imagenes = imagenes;
}

Slider.prototype.armarSlider = function(id){
   let contenido = '<ul id="idSlider" class="slides">';
   for(var l = 0; l < this.imagenes.length; l++){

      let ant = l-1;
      if(l==0)
        ant = this.imagenes.length-1;

      let sig = l+1;
      if(sig==this.imagenes.length)
        sig = 0;

      checked='';
      if(l==id){
        checked='checked';
      }
      contenido = contenido + '<input type="radio" name="radio-btn" id="img-'+ l +'" '+checked+' /><li class="slide-container"><div class="slide"><img src="'+this.imagenes[l][0]+'" onclick="jsGrid()" title="See Grid" /></div><div class="nav"><label for="img-'+ ant +'" class="prev" onclick="jsSelectDot('+ant+')" >&#x2039;</label><label for="img-'+ sig +'" class="next" onclick="jsSelectDot(' + sig + ')" >&#x203a;</label></div></li>';
   }
   contenido = contenido + '<li class="nav-dots">';
   for(var l = 0; l < this.imagenes.length; l++){
     contenido = contenido + '<label for="img-'+ l +'" class="nav-dot" id="img-dot-'+ l +'" onclick="jsSelectDot(' + l + ')"></label>';
   }
   contenido = contenido + '</li></ul>';
   document.getElementById("imagenes").innerHTML = contenido;
   this.cambiarLabel(id);

   this.elementNext = document.getElementsByClassName('next');
   this.elementAnt = document.getElementsByClassName('ant');

 }

Slider.prototype.armarSliderCubo = function(){
   let contenido = '<section class="three-d-container">';

   maxcaras=6;
   if(this.imagenes.length<maxcaras)
      maxcaras=this.imagenes.length;

   for(var l = 0; l < maxcaras; l++){
     contenido = contenido + '<input type="radio" checked class="three-d-bullet cara'+l+'" name="three-d">';
   }
   contenido = contenido + '<div class="three-d-cube">';
   for(var l = 0; l < this.imagenes.length; l++){
     contenido = contenido + '<figure class="three-d-item"><img src="'+this.imagenes[l][0]+'" onclick="jsGrid()" title="See Grid" ></figure>';
   }
   contenido = contenido + '</div></section>';
   document.getElementById("imagenes").innerHTML = contenido;
}

Slider.prototype.cambiarLabel = function (idLabel){
  var rads = document.getElementsByName("radio-btn");
  for (var i=0;i<rads.length;i++){
    document.getElementById('img-dot-'+i).classList.remove('nav-dot-select');
  }
  document.getElementById('img-dot-'+idLabel).classList.add('nav-dot-select');
}
