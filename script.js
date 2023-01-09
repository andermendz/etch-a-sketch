const container = document.querySelector("#container");
const generate = document.querySelector("#generate");

generate.addEventListener("click", () =>{
    generator()
    reactions();
})


function reactions() {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {1
    box.addEventListener("mousemove", () => {
      console.log("box touched");
      box.setAttribute("style", "background-color:black;");
    });
  });
}

function generator() {
 while (container.lastChild) {
    container.removeChild(container.lastChild);

 }
    
var ratio = prompt("How many boxes and lines from 1 - 100?")

while (ratio > 100 || ratio <= 0) {
  var ratio = prompt("How many boxes and lines from 1 - 100?")
} 
if (ratio > 0 || ratio <= 100) {
  var hline = 100 / ratio;
  console.log(hline)
    for (i = 0; i < ratio; i++) {
      const line = document.createElement("div");
      line.setAttribute("class", "line");
      line.style.height = `${hline}%`  
      for (j = 0; j < ratio; j++) {
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        line.appendChild(box);
      }
      container.appendChild(line);
    }
  }
}

