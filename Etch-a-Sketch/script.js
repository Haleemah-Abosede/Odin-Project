const container = document.querySelector(".container");
const erase = document.querySelector("#erase");
const clear = document.querySelector("#clear");
const save = document.querySelector("#save");
const pixelRange = document.querySelector("#pixelSize");

let color = "black";

document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);

  let selectBtn = document.querySelector(".select");
  selectBtn.addEventListener("click", () => {
    let size = getSize();
    createBoard(size);
  });
});

function createBoard(size) {
  let numDivs = size * size;

  containerWidth = container.offsetWidth;
  containerHeight = container.offsetHeight;
  area = parseInt(containerWidth) * parseInt(containerHeight);
  let dimension = parseInt(area) / parseInt(size);
  console.log(dimension);
  console.log(area);
  console.log(containerWidth);
  console.log(containerHeight);
  console.log(dimension + "px");

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.className = "box";
    div.style.width = `${dimension}` + "px";
    div.style.height = `${dimension}` + "px";
    div.addEventListener("mouseover", spreadColor);
    container.insertAdjacentElement("beforeend", div);
  }
}

function spreadColor() {
  if (color == "random") {
    colorValue = Math.floor(Math.randon() * 0xffffff).toString(16);
    this.style.backgroundColor = `#${colorValue}`;
  } else if (color == "monochrome") {
    this.style.backgroundColor = "blue";
  } else if (color == "grayscale") {
    this.style.backgroundColor = "green";
  } else {
    this.style.backgroundColor = "black";
  }
}

function setColor(colorChoice) {
  let color = colorChoice;
}

function getSize() {
  let input = parseInt(pixelRange.value);
  let msg = document.querySelector(".message");
  if (!input) {
    msg.textContent = "Please enter a number";
  } else if (input < 2 || input > 100) {
    msg.textContent = "The number must be between 2 and 100";
  } else {
    msg.textContent = "Have fun playing sketch-er";
    return input;
  }
}
