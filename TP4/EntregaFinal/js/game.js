var self;

function Game(player){
    this.point=0;
    this.best=0;
    this.lives=3;
    this.enemigos = [];
    this.player = player;
    this.idciclos = null;
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
          this.lives=this.lives-1;
      }
      else {
        console.log('no toca');
        if((this.player.estado=='jump')||(this.player.estado=='down'))
            this.point=this.point+1;
      }
  }
}

Game.prototype.jugar = function(){
  this.reloj();
  this.idciclos = setInterval(function(){
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
  var minutos = 3;
  var segundos = 00;
  setInterval(function(){
     if (segundos === 0){ segundos=59; minutos--;}
     segundos --;
     if((segundos === 0)&&(minutos===0)){
        clearInterval(this.idciclos);
        if(this.lives>0){
           alert('gano');
         }
         else{
            alert('perdio');
         }
     }else{
        if(this.lives==0){
           clearInterval(this.idciclos);
           alert('perdio');
        }
     }

     var string = "";
     string += minutos + ':'+ segundos;
     document.getElementById("time").innerHTML = string;
 }, 1000);

}
