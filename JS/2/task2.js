let input = document.getElementById("input");
let button = document.getElementById("button");

let pMin = document.createElement("p");
let pMax = document.createElement("p");


button.addEventListener("click", () => {
  pMin.innerText = `${getMinElem(input.value.split(" "))} is the minimal element`;
  pMax.innerText = `${getMaxElem(input.value.split(" "))} is the maximum element`;
  document.body.appendChild(pMin);
  document.body.appendChild(pMax);
});

let getMinElem = (arr) => Math.min.apply(null, arr);

let getMaxElem = (arr) => Math.max.apply(null, arr);