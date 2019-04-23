let input = document.getElementById("input");
let button = document.getElementById("button");

let result = document.createElement("p");

button.addEventListener("click", () => {
  let value = (parseInt(input.value));

  if(isSimpleNumber(value)) {
    result.innerText = `Number ${value} is a simple number`;
  } else {
    result.innerText = `Number ${value} is a composite number`;
  }
  document.body.appendChild(result);
});

let isSimpleNumber = (num) => {
  let count = 0;

  for(let i = 1; i < num; ++i){
    if(num % i == 0) ++count;
    if(count > 1) return false;
  }
  
  return true;
}