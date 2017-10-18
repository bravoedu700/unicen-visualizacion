document.onkeydown = function(e) {
  switch(event.code) {
      case "ArrowRight":
          document.getElementById('runner').classList.toggle('runner-right');
          break;
      case "ArrowLeft":
      document.getElementById('runner').classList.toggle('runner-left');
          break;
      case "ArrowTop":

          break;
      case "ArrowDown":

          break;
      case "Space":

          break;
  }


}
