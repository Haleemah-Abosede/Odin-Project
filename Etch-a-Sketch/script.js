const container = document.querySelector(".container");
const erase = document.querySelector("#erase");
const clear = document.querySelector("#clear");
const save = document.querySelector("#save");
const pixelRange = document.querySelector("#pixelSize");
let msg = document.querySelector(".message");

let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);

  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      if (click) {
        msg.textContent = "Enjoy the Game";
      } else {
        msg.textContent = "Not Allowed";
      }
    }
  });

  let selectBtn = document.querySelector(".select");
  selectBtn.addEventListener("click", () => {
    let size = getSize();
    createBoard(size);
  });
});

function createBoard(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", spreadColor);
    container.insertAdjacentElement("beforeend", div);
  }
}
// document.querySelector("#colorPicker").onchange = (e) => {
//   pickedColour = e.target.value;
//   return pickedColour;
//   console.log(e.target.value);
// };

function spreadColor() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color == "selectedColor") {
      console.log("clicking");
      alert("hola");
      colourInput = document.querySelector("#colorPicker");
      colourInput.oninput = () => {
        pickedColour = colourInput.value;
        this.style.backgroundColor = `${pickedColour}`;
      };
    } else if (color == "grayscale") {
      gray = Math.floor(Math.random() * 256);
      this.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`;
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function getSize() {
  let input = parseInt(pixelRange.value);
  if (!input) {
    msg.textContent = "Please enter a number";
  } else if (input < 2 || input > 100) {
    msg.textContent = "The number must be between 2 and 100";
  } else {
    msg.textContent = "Have fun playing sketch-er";
    return input;
  }
}

clear.addEventListener("click", () => {
  window.location.reload();
});
