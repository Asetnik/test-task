let input = document.getElementById("input");
let button = document.getElementById("button");

let result = document.createElement("p");

button.addEventListener("click", () => {
  result.innerText = `The factorial of ${input.value} is ${factorial(parseInt(input.value))}`;
  document.body.appendChild(result);
})

let factorial = (n) => {
  let result = n;

  while(n - 1 > 0) {
    result *= n-1;
    --n;
  }
  
  return result;
}