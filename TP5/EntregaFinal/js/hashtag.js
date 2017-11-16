function Hashtags(){
   this.imagenes = [];
   this.cb = new Codebird;
   this.cb.setConsumerKey("AK9DErT1QUO1MLkj9D7eso2Hm", "Chc3n2XbB5nnouXlk7rDR65Y9fEBSuQlZz3jtUpXkwZ9Vrj29M");
   this.cb.setToken("106515381-DyI2J51grdHEZOzomh2VbfmIcfNp4FPR4XfMwvq9", "7sy0boolwReSRLLM8pHDlWPeCu7EcyOcjKgBjZCkk62ky");
   this.cb.setProxy("https://cb-proxy.herokuapp.com/");
   this.next='';
}

Hashtags.prototype.autorizar = function(){
   this.cb.__call(
     'oauth2_token',
     {},
     function (reply, rate, err) {
         var bearer_token = reply.access_token;
       }
   );
}

Hashtags.prototype.search = function(q){
   this.cb.__call(
     'search_tweets',
     {
       httpmethod:"GET",
       q: q,
       tweet_mode:'extended',
       filter:'media',
       count : '100'
     },
     (reply) => {
         this.imagenes = [];
         if((reply.httpstatus == 200)&&(reply.statuses.length>0)){
           for(i=0;i<reply.statuses.length;i++){
             if(typeof reply.statuses[i].extended_entities !== "undefined"){
               if(!this.indexOfArray(reply.statuses[i].extended_entities.media[0].media_url,this.imagenes))
                  this.imagenes.push([reply.statuses[i].extended_entities.media[0].media_url, reply.statuses[i].favorite_count]);
               }
             }
            this.armarGrid();
         }
         else{
            document.getElementById("imagenes").innerHTML = '<div class="errorMsj">¡¡¡ Hashtags Without Results !!!</div>';
         }
         document.getElementById("loading").style.display = 'none';
       }
   );
}

Hashtags.prototype.getNextResult = function(){
   return this.next;
}

Hashtags.prototype.armarGrid = function(){
   var contenido = '<ul id="idGrilla" class="grid">';
   for (var l = 0; l < this.imagenes.length; l++) {
         contenido = contenido + '<li class="item" id="img'+ l +'" onclick="jsSlider('+ l +')" ><img src="'+this.imagenes[l][0]+'" title="See Slider"><div><i class="fa fa-twitter" aria-hidden="true">'+this.imagenes[l][1]+'</i></div></li>';
   }
   contenido = contenido + '</ul>';
   document.getElementById("imagenes").innerHTML = contenido;
}

Hashtags.prototype.indexOfArray = function(val, array) {
  for(j = 0; j < array.length; j++) {
    if(array[j][0] == val)
      return true;
  }
  return false;
}

Hashtags.prototype.getImagenes = function(){
  return this.imagenes;
}
