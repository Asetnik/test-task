let input = document.getElementById("input");
let button = document.getElementById("button");

let result = document.createElement("p");

button.addEventListener("click", () => {
  if(input.value < 2) {
    result.innerText = `Number must be greater than 2`;
  } else {
    result.innerText = `The first ${input.value} Fibonacci numbers ${fibonacciNumbers(parseInt(input.value))}`;
  }
  document.body.appendChild(result);
})

let fibonacciNumbers = (n) => {
  let arr = [0, 1];
  if(n > 2) {
    for(let i = 3; i <= n; ++i) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }
  return arr;
}