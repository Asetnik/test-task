let input = document.getElementById("input");
let button = document.getElementById("button");
let required = document.getElementById("required");
let withSubstr = document.createElement("p");
let withoutSubstr = document.createElement("p");

button.addEventListener("click", () => {
  let arrayStrings = input.value.split(". ");
  let req = required.value;
  let separatedStrings = separateStrings(arrayStrings, req);
  withSubstr.innerText = `Whith subsrting: ${separatedStrings["withSubstr"]}`;
  withoutSubstr.innerText = `Whithout subsrting: ${separatedStrings["withoutSubstr"]}`;
  document.body.appendChild(withSubstr);
  document.body.appendChild(withoutSubstr);
});

let separateStrings = (arr, required) => {
  let withSubstr = [];
  let withoutSubstr = [];
  let result = {};

  arr.forEach(element => {
    if(element.indexOf(required) === -1) {
      withoutSubstr.push(element);
    } else {
      withSubstr.push(element);
    }
  });

  result["withSubstr"] = withSubstr;
  result["withoutSubstr"] = withoutSubstr;
  return result;
}