document.onkeydown = function(e) {
  switch(event.code) {
      case "ArrowRight":
          ArrowRight = true;
          break;
      case "ArrowUp":
          ArrowUp = true;
          break;
      case "ArrowDown":
          ArrowDown = true;
          break;
      default:
          break;
  }
}

document.onkeyup = function(e) {
  switch(event.code) {
    case "ArrowRight":
        ArrowRight = false;
        break;
    case "ArrowUp":
        ArrowUp = false;
        break;
    case "ArrowDown":
        ArrowDown = false;
        break;
    default:
        break;
  }
}
