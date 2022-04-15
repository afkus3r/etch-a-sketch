function grid(size) {
  const box = document.querySelector(".box");
  while (box.firstChild) {
    box.removeChild(box.lastChild);
  }
  for (let i = 0; i < size; i++) {
    const rows = document.createElement("div");
    rows.classList.add("rows");
    box.appendChild(rows);
    for (let i = 0; i < size; i++) {
        const cubes = document.createElement("div");
        cubes.classList.add("cubes");
        rows.appendChild(cubes);
    }
  }
}

function sizeChoice () {
  const size = document.querySelectorAll("input[name=size]");
  size.forEach((size) => {
    size.addEventListener("click", () => {
        grid(size.value);
    });
  });
}

function hover (hoverStyle) {
  const cubes = document.querySelectorAll(".cubes");
  cubes.forEach((cube) => {
    cube.addEventListener("mouseover", () => {
      cube.setAttribute("class", hoverStyle);
    });
  });
}

function colorChoice () {
  const colors = document.querySelectorAll("input[name=color]");
  colors.forEach((color) => {
    color.addEventListener("click", () => {
       hover(color.value);
    });
  });
}

grid(16);
sizeChoice();
colorChoice();