// function sizeChoice () {
//     const size = document.querySelectorAll('input[name=size]');
//     size.forEach((size) => size.addEventListener('click'));
// }

function grid(size) {
  const box = document.querySelector(".box");
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

grid(16);