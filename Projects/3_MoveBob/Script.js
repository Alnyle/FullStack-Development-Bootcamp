const bob = document.querySelector(".bob");

console.log(bob);

const eyes = document.querySelector(".eye-container");

let left = 100;
let right = 100;
// let top = 100;
let bottom = 100;

function moveBob(e) {
  console.log(e.key);

  if (e.key === "ArrowLeft") {
    moveLeft();
  } else if (e.key === "ArrowDown") {
    moveBottom();
  } else if (e.key === "ArrowRight") {
    moveRight();
  } else if (e.key === "ArrowUp") {
    moveTop();
  }
}

function moveRight() {
  left += 100;
  bob.style.left = left + "px";
  bob.style.transform = "rotate(0deg)";
  eyes.style.left = "60px";
  eyes.style.top = 45 + "px";
}

function moveLeft() {
  left -= 100;
  bob.style.left = left + "px";
  bob.style.transform = "rotate(180deg)";
  eyes.style.top = 80 + "px";
  eyes.style.left = "60px";
}

function moveTop() {
  bottom += 100;
  bob.style.bottom = bottom + "px";
}

function moveBottom() {
  bottom -= 100;
  bob.style.bottom = bottom + "px";
}

document.addEventListener("keydown", moveBob);
