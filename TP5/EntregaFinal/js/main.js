let q = '';
let slider;
let grid;
let hashtags = new Hashtags;
hashtags.autorizar();

document.getElementById('inicio').onclick = function(){
   if(document.getElementById("searchbox").offsetLeft == 0){
      document.getElementById("search").value='';
      document.getElementById("searchbox").classList.add('animation-inicio');

          hideBotonesGrid();
          hideBotonesSlider();

          document.getElementById("searchbox").classList.remove("animation-inicio");
          showBotonSearch();

      document.getElementById("searchbox").classList.remove("animation-search");
      document.getElementById("imagenes").innerHTML= "  ";

   }
}


document.getElementById('search').onchange = function(){

   document.getElementById("imagenes").innerHTML= "  ";
   document.getElementById("searchbox").classList.add('animation-search');

     hideBotonesSlider();
     showBotonesGrid();
     hideBotonSearch();

   document.getElementById("loading").style.display = 'block';
   let q = document.getElementById("search").value;
   hashtags.search(q);

}

document.getElementById('jsGrilla2Bottom').onclick = function(){
    document.getElementById('jsGrilla1Bottom').classList.remove('active');
    document.getElementById('jsGrilla2Bottom').classList.add('active');
    document.getElementById("idGrilla").classList.add('grid2');
}

document.getElementById('jsGrilla1Bottom').onclick = function(){
   document.getElementById('jsGrilla2Bottom').classList.remove('active');
   document.getElementById('jsGrilla1Bottom').classList.add('active');
   document.getElementById("idGrilla").classList.remove("grid2");
}

document.getElementById('jsSlider2Bottom').onclick = function(){
   document.getElementById('jsSlider1Bottom').classList.remove('active');
   document.getElementById('jsSlider2Bottom').classList.add('active');
   slider.armarSliderCubo();
}

document.getElementById('jsSlider1Bottom').onclick = function(){
   document.getElementById('jsSlider2Bottom').classList.remove('active');
   document.getElementById('jsSlider1Bottom').classList.add('active');
   slider.armarSlider(0);
}

function jsGrid(){
  hideBotonesSlider();
  showBotonesGrid();
  hashtags.armarGrid();
}

function jsSlider(idSel){
   slider = new Slider(hashtags.getImagenes());
   slider.armarSlider(idSel);
   hideBotonesGrid();
   showBotonesSlider();
}

function jsSelectDot(id){
 slider.cambiarLabel(id);
}

function hideBotonSearch(){
  document.getElementById("jsSearchBottom").classList.add("animation-hide");
  document.getElementById("jsSearchBottom").classList.remove('animation-show');
}
function showBotonSearch(){
  document.getElementById("jsSearchBottom").classList.remove("animation-hide");
  document.getElementById("jsSearchBottom").classList.add('animation-show');
}

function hideBotonesGrid(){
  document.getElementById("jsGrilla1Bottom").classList.remove('animation-show');
  document.getElementById("jsGrilla2Bottom").classList.remove('animation-show');
  document.getElementById("jsGrilla1Bottom").classList.add('animation-hide');
  document.getElementById("jsGrilla2Bottom").classList.add('animation-hide');
}
function showBotonesGrid(){
    document.getElementById("jsGrilla1Bottom").classList.remove('animation-hide');
    document.getElementById("jsGrilla2Bottom").classList.remove('animation-hide');
    document.getElementById("jsGrilla1Bottom").classList.add('animation-show');
    document.getElementById("jsGrilla2Bottom").classList.add('animation-show');
    document.getElementById("jsGrilla1Bottom").classList.add('active');
}

function hideBotonesSlider(){
  document.getElementById("jsSlider1Bottom").classList.remove('animation-show');
  document.getElementById("jsSlider2Bottom").classList.remove('animation-show');
  document.getElementById("jsSlider1Bottom").classList.add('animation-hide');
  document.getElementById("jsSlider2Bottom").classList.add('animation-hide');
}
function showBotonesSlider(){
  document.getElementById("jsSlider1Bottom").classList.remove('animation-hide');
  document.getElementById("jsSlider2Bottom").classList.remove('animation-hide');
  document.getElementById("jsSlider1Bottom").classList.add('animation-show');
  document.getElementById("jsSlider1Bottom").classList.add('active');
  document.getElementById("jsSlider2Bottom").classList.add('animation-show');
}
