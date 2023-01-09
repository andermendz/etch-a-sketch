const container = document.querySelector("#container");
const generate = document.querySelector("#generate");

generate.addEventListener("click", () => {
  // call the functions
  generator();
  reactions();
});

function reactions() {
  // added reactions
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mousemove", () => {
      box.setAttribute("style", "background-color:black;");
    });
  });
}

function generator() {
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
  // ratio conditionals
  var ratio = prompt("How many boxes and lines from 1 - 100?");

  while (ratio > 100 || ratio <= 0) {
    var ratio = prompt("How many boxes and lines from 1 - 100?");
  }
  if (ratio > 0 || ratio <= 100) {
    var hline = 100 / ratio; // the 100 percent of the heigh / amount of lines = the heigh of each line
    for (i = 0; i < ratio; i++) {
      // generate the same amount of lines and boxes
      const line = document.createElement("div");
      line.setAttribute("class", "line");
      line.style.height = `${hline}%`;
      for (j = 0; j < ratio; j++) {
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        line.appendChild(box);
      } // add the generated lines to the container
      container.appendChild(line);
    }
  }
}
