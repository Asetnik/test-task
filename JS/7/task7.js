let input = document.getElementById("input");
let button = document.getElementById("button");

let result = document.createElement("p");

button.addEventListener("click", () => {
  let arr = input.value.split(" ");
  result.innerText = `Amount numbers: `;
  document.body.appendChild(result);
  for(key in obj = amountNumbers(arr)) {
    let elem = document.createElement("p");
    elem.innerText = `${key}: ${obj[key]}`;
    document.body.appendChild(elem);
  }
});

let amountNumbers = (arr) => {
  let result = {};
  
  arr.forEach(element => {
    if(!result[element]){
      result[element] = 1;
    }else{
      result[element]++;
    }
  });

  return result;
}