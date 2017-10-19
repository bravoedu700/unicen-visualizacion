var self;
var idInterbalGame;
var idInterbalReloj;
var point=0;
var best=0;
var lives=3;

function Game(player){
    this.enemigos = [];
    this.player = player;
    self = this;
    for(let i=0;i<5;i++){
        enemy = new Enemy(i);

        enemy.draw();
        this.enemigos.push(enemy);
    }
}
Game.prototype.update = function(){

  for(let i=0;i<this.enemigos.length;i++){
      this.enemigos[i].move();
      if(this.verifyColition(this.player,this.enemigos[i])){
          // logica del juego
          console.log('toca');
          lives=lives-1;
      }
      else {
        console.log('no toca');
        if((this.player.estado=='jump')||(this.player.estado=='down'))
            point=point+1;
      }
  }
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
        }
      }
  }
}

Game.prototype.reloj = function(){
  var minutos = 0;
  var segundos = 20;
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
