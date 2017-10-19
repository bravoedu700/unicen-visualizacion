document.onkeydown = function(e) {
  switch(event.code) {
      case "ArrowRight":
          player.right();
          console.log(player);
          break;
      case "ArrowLeft":
          player.left();
          break;
      case "ArrowUp":
          player.jump();
          break;
      case "ArrowDown":
          player.down();
          break;
      default:
          player.stop();
          break;
  }
}

document.onkeyup = function(e) {
  switch(event.code) {
    default:
      player.stop();

        break;
  }
}
