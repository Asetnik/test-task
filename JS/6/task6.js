let input = document.getElementById("input");
let required = document.getElementById("required");
let button = document.getElementById("button");

let result = document.createElement("p");

button.addEventListener("click", () => {
  let req = parseFloat(required.value);
  let arr = input.value.split(" ");
  arr = arr.map((i) => parseFloat(i));
  let binSearch = binarySearch(arr, req);
  if(binSearch > -1) {
    result.innerText = `The index of the desired element ${binSearch}`;
  } else {
    result.innerText = `Desired element not found`;
  }

  document.body.appendChild(result);
});

let binarySearch = (arr, required) => {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  if(required < arr[left] || required > arr[right]) return -1;
  let midle = Math.floor((right + left) / 2);

  while(arr[midle] !== required) {
    if(right - left === 1 && arr[left] !== required && arr[right] !== required) return -1;
    midle = Math.floor((right + left) / 2);
    if(arr[midle] > required) {
      right = midle;
    } else {
      left = midle;
    }
  }
  
  if(arr[midle] !== required) return -1;
  return midle;
}