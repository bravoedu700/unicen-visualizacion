var self;
var idInterbalGame;
var idInterbalReloj;
var point=0;
var best=0;
var lives=10;
var ArrowRight = false;
var ArrowUp = false;
var ArrowDown = false;

function Game(player){
    this.enemigos = [];
    this.player = player;
    self = this;
    var distancia=0;
    var newPosx = 0;
    for(let i=0;i<5;i++){
        distancia = distancia + Math.round(Math.random() * (200 - 80) + 80);
        newPosx = 1220 + distancia
        enemy = new Enemy(i, newPosx);
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
  var velEnemy=2;
  if(ArrowUp == true){
      player.jump();
      this.backgroundStart();
      velEnemy=8;
    }
    else if(ArrowDown == true){
      player.down();
      this.backgroundStart();
      velEnemy=8;
    }
    else if(ArrowRight == true){
      player.right();
      this.backgroundStart();
      velEnemy=8;
    }
    else {
      player.stop();
      this.backgroundStop();
      velEnemy=2;
    }

  for(let i=0;i<this.enemigos.length;i++){
      this.enemigos[i].move(velEnemy);
      if(this.verifyColition(this.player,this.enemigos[i])){
          //logica del juego
          lives=lives-1;
          self.drawLives(lives);
          this.enemigos[i].setToco(1);
          this.enemigos[i].setExploto();
      }
      else {
            if(this.pasoEnemigo(this.player,this.enemigos[i])){//console.log('no toca');
              point=point+1;
              self.drawPoint(point);
            }
      }
   }

  if(lives==0){
     this.player.die();
     this.showPopup();
     clearInterval(idInterbalReloj);
     clearInterval(idInterbalGame);
     //this.clearAnimations();
   }

}

Game.prototype.jugar = function(){
  this.reloj();
  idInterbalGame = setInterval(function(){
    self.update();
  }, 50);
}

Game.prototype.pasoEnemigo = function(player,enemy){
  if((player.getX()>enemy.getX())&&(enemy.getToco()==0)){
      return true;
  }
  else {
    return false;
  }
}

Game.prototype.verifyColition = function(player,enemy){

  playerMaxX = player.getX() + player.getR();
  playerMaxY = player.getY() + player.getR();

  enemyMaxX = enemy.getLeft() + enemy.getR();
  enemyMINY = enemy.getTop() + enemy.getR();

  if(player.getEstado()=='jump'){
     playerMaxY=playerMaxY-200;
  }
  //console.log();
  console.log(playerMaxY+' - '+enemyMINY);


  if(enemy.getToco()==0){
     if(playerMaxX < enemy.getLeft()){
         return false;
     }
     else {
         if(player.getX() > enemyMaxX){
           return false;
         }
         else {
           if(playerMaxY < enemy.getTop()){
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

Game.prototype.showPopup = function(){
   document.getElementById('popUp').style.display = 'block';
}
