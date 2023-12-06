const container = document.querySelector(".container");
const btnStatus = document.querySelector(".status");
const clear = document.querySelector("#clear");
const reset = document.querySelector("#reset");
const saveBtn = document.querySelector("#save");
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
        btnStatus.textContent = "Game Status: Game On";
      } else {
        btnStatus.textContent = "Game Status: Not Allowed";
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
    div.classList.add("box");
    div.addEventListener("mouseover", spreadColor);
    container.insertAdjacentElement("beforeend", div);
  }
}

colourInput = document.querySelector("#colorPicker");
colourInput.onchange = () => {
  pickedColour = colourInput.value;
};

function spreadColor() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color == "selectedColour") {
      this.style.backgroundColor = `${pickedColour}`;
    } else if (color == "grayscale") {
      gray = Math.floor(Math.random() * 256);
      this.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`;
    } else if (color == "erase") {
      this.style.backgroundColor = "#ededed";
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
  divs = document.querySelectorAll("div.box");
  divs.forEach((div) => {
    div.style.backgroundColor = "#ededed";
  });
});

reset.addEventListener("click", () => {
  window.location.reload();
});

// function saveImage(filename, content) {
//   const element = document.createElement("a");

//   const blob = new Blob([content], {
//     type: "image/jpeg",
//   });

//   const link = URL.createObjectURL(blob);

//   element.setAttribute("href", link);
//   element.setAttribute("download", filename);

//   // element.style.display = "none";

//   document.body.appendChild(element);
//   element.click();

//   document.body.removeChild(element);
// }

window.onload = () => {
  saveBtn.addEventListener("click", () => {
    // alert("yes ooo");
    // const filename = prompt("Specify filename");
    // const content = container.value;
    // console.log(content);
    // console.log(filename);

    // if (filename && content) {
    //   saveImage(filename, content);
    // }

    window.print();
  });
};
