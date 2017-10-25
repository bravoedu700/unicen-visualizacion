var self;
var idInterbalGame;
var idInterbalReloj;
var point=0;
var best=0;
var lives=0;
var ArrowRight = false;
var ArrowUp = false;
var ArrowDown = false;
var velEnemySet=2;
var minutos = 0;
var segundos = 10;

function Game(player){
    this.enemigos = [];
    this.player = player;
    self = this;
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

  if(ArrowUp == true){
      player.jump();
      if(ArrowRight == true){
         this.backgroundStart();
         velEnemy=velEnemySet*4;
      }

    }
    else if(ArrowRight == true){
      player.right();
      this.backgroundStart();
      velEnemy=velEnemySet*4;
    }
    else{
      if(player.getEstado()!='die')
         player.stop();
      this.backgroundStop();
      velEnemy=velEnemySet/4;
    }

  for(let i=0;i<this.enemigos.length;i++){
      this.enemigos[i].move(velEnemy);
      if(this.verifyColition(this.player,this.enemigos[i])){
          //logica del juego
          lives=lives-1;
          self.drawLives(lives);
          this.enemigos[i].setToco(1);
          this.enemigos[i].setExploto();
          this.player.hurts();
      }
      else {
            if(this.pasoEnemigo(this.player,this.enemigos[i])){//console.log('no toca');
               point=point+10;
               self.drawPoint(point);
               this.enemigos[i].setPaso(1);
            }
      }
      //chequeo las vidas
      if(lives==0){
         //si no tengo mas vidas detengo el reloj, el update y calculo el resultado
         msj='GAME OVER';
         clearInterval(idInterbalGame);
         clearInterval(idInterbalReloj);
         this.player.die();
         if(best<point){
           best=point;
           this.drawBest(best);
           msj='NEW RECORD';
         }

         this.showPopup(msj);
       }
   }

}

Game.prototype.restart = function(){
   player.stop();
   point=0;
   self.drawPoint(0);
   this.enemigos = [];
   var distancia=0;
   var newPosx = 0;
   for(let i=0;i<5;i++){
      distancia = distancia + Math.round(Math.random() * (200 - 80) + 80);
      newPosx = 1220 + distancia
      enemy = new Enemy(i, newPosx);
      enemy.setAnimacion(i);
      this.enemigos.push(enemy);
   }
}

Game.prototype.jugar = function(newLives){
   this.restart();
   lives=newLives;
   this.drawLives(lives);
   this.drawPoint(0);
   this.reloj();
   idInterbalGame = setInterval(function(){
     self.update();
   }, 50);
}

Game.prototype.pasoEnemigo = function(player,enemy){

  if((player.getX()>enemy.getLeft())&&(enemy.getToco()==0)&&(enemy.getPaso()==0)){
      return true;
  }
  else {
    return false;
  }
}

Game.prototype.verifyColition = function(player,enemy){

  playerMaxX = player.getX() + player.getR();
  playerMixX = player.getX();

  playerMaxY = player.getY() + player.getR();
  playerMinY = player.getY();

  enemyMaxX = enemy.getLeft() + enemy.getR();
  enemyMinX = enemy.getLeft();

  enemyMaxY = enemy.getTop();
  enemyMinY = enemy.getTop() + enemy.getR();

  if(player.getEstado()=='jump'){
     playerMaxY=playerMaxY-200;
  }
  //console.log();
  //console.log(playerMaxY+' - '+enemyMINY);

  if(enemy.getToco()==0){
     if(playerMaxX < enemyMinX){
         return false;
     }
     else {
         if(playerMixX > enemyMaxX){
           return false;
         }
         else {
           if(playerMaxY < enemyMaxY){
             return false;
           }
           else {
             return true;
           }
         }
     }
  }
  else{
     return false;
 }
}

Game.prototype.reloj = function(){
  idInterbalReloj = setInterval(function(){
     var msj='';
     if (segundos === 0){ segundos=59; minutos--;}
     segundos --;
     if((segundos === 0)&&(minutos===0)){
        //si no tengo mas tiempo detengo el reloj, el update y calculo el resultado
        clearInterval(idInterbalGame);
        clearInterval(idInterbalReloj);
        if(lives>0){
           if(best<point){
             best=point;
             self.drawBest(best);
             msj='NEW RECORD';
          }else{
             msj='WINNER';
          }
         }
         else{
            msj='GAME OVER';
         }
      self.showPopup(msj);
     }

     var string = "";
     var decimalS = "";
     var decimalM = "";
     if(segundos<10) decimalS = "0";
     if(minutos<10) decimalM = "0";


     string += decimalM+minutos + ':'+ decimalS +''+ segundos;
     document.getElementById("time").innerHTML = string;
 }, 1000);

}

Game.prototype.backgroundStart = function(){
  document.getElementById('piso').style.animationPlayState = 'running';
  document.getElementById('arboles').style.animationPlayState = 'running';
  document.getElementById('montanias').style.animationPlayState = 'running';
  document.getElementById('nubes').style.animationPlayState = 'running';
  document.getElementById('body').style.animationPlayState = 'running';
}

Game.prototype.backgroundStop = function(){
  document.getElementById('piso').style.animationPlayState = 'paused';
  document.getElementById('arboles').style.animationPlayState = 'paused';
  document.getElementById('montanias').style.animationPlayState = 'paused';
  document.getElementById('nubes').style.animationPlayState = 'paused';
  document.getElementById('body').style.animationPlayState = 'paused';
}

Game.prototype.hidePopup = function(){
   document.getElementById('popUp').style.display = 'none';
}

Game.prototype.showPopup = function(msj){
   ArrowRight = false;
   ArrowUp = false;
   ArrowDown = false;
   this.backgroundStop();
   document.getElementById('popUp').style.display = 'block';
   document.getElementById('msjPopup').innerHTML = msj;
}
