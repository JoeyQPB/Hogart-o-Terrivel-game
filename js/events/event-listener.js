window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      if (player.velocity.y === 0) player.velocity.y = -25;
      break;
    case "a":
      player.velocity.x = -4;
      keys.a.pressed = true;
      break;
    case "d":
      player.velocity.x = 4;
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
      player.velocity.x = 0;
      keys.a.pressed = false;
      break;
    case "d":
      player.velocity.x = 0;
      keys.d.pressed = false;
      break;
  }
});
