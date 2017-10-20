var self;
var idInterbalGame;
var idInterbalReloj;
var point=0;
var best=0;
var lives=10;

function Game(player){
    this.enemigos = [];
    this.player = player;
    self = this;
    distancia=0;
    for(let i=0;i<5;i++){

        distancia = distancia + Math.round(Math.random() * (200 - 80) + 80);
        posx = 1220 + distancia
        enemy = new Enemy(i, posx);
        enemy.draw();
        this.enemigos.push(enemy);

    }
}

Game.prototype.drawLives = function(valor){
   document.getElementById("vidas").innerHTML=valor;
}

Game.prototype.drawPoint = function(valor){
   document.getElementById("point").innerHTML=valor;
}

Game.prototype.drawBest = function(valor){
   document.getElementById("best").innerHTML=valor;
}


Game.prototype.update = function(){

  for(let i=0;i<this.enemigos.length;i++){
      this.enemigos[i].move();
      if(this.verifyColition(this.player,this.enemigos[i])){
          // logica del juego
          console.log('toca');
          lives=lives-1;
          self.drawLives(lives);

      }
      else {
        console.log('no toca');
        if((this.player.estado=='jump')||(this.player.estado=='down'))
            point=point+1;
            self.drawPoint(point);
      }
   }

  /*
  if(lives==0){
     clearInterval(idInterbalReloj);
     clearInterval(idInterbalGame);
     alert('perdio');
   }
   */

}

Game.prototype.jugar = function(){
  this.reloj();
  idInterbalGame = setInterval(function(){
    self.update();
  }, 50);
}

Game.prototype.verifyColition = function(player,enemy){

  playerMaxX = player.getX() + player.getR();
  playerMaxY = player.getY() + player.getR();

  enemyMaxX = enemy.getX() + enemy.getR();

  if(enemy.getToco()==0){
     if(playerMaxX < enemy.getX()){
         return false;
     }
     else {
         if(player.getX() > enemyMaxX){
           return false;
         }
         else {
           if(playerMaxY < enemy.getY()){
             return false;
           }
           else {
             return true;
             enemy.setToco(1);
           }
         }
     }
  }
  else{
     return false;
 }
}

Game.prototype.reloj = function(){
  var minutos = 2;
  var segundos = 59;
  idInterbalReloj = setInterval(function(){
     if (segundos === 0){ segundos=59; minutos--;}
     segundos --;
     if((segundos === 0)&&(minutos===0)){
        clearInterval(idInterbalGame);
        clearInterval(idInterbalReloj);
        if(lives>0){
           alert('gano');
         }
         else{
            alert('perdio');
         }
     }else{
        if(lives==0){
           clearInterval(idInterbalReloj);
           clearInterval(idInterbalGame);
           alert('perdio');
        }
     }

     var string = "";
     string += minutos + ':'+ segundos;
     document.getElementById("time").innerHTML = string;
 }, 1000);

}
