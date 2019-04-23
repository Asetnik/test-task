let input = document.getElementById("input");
let button = document.getElementById("button");

let result = document.createElement("p");

button.addEventListener("click", () => {
  if(isPalindrome(input.value)) {
    result.innerText = `"${input.value}" is a palindrome`;
  } else {
    result.innerText = `"${input.value}" not a palindrome`;
  }
  document.body.appendChild(result);
});

let isPalindrome = (str) => {
  str = str.toLowerCase();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}