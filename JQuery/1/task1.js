let result = $("<p>");

$("#button").click( () => {
  let inputValue = $("#input").val();
  if(isPalindrome(input.value)) {
    result.text(`"${inputValue}" is a palindrome`);
  } else {
    result.text(`"${inputValue}" not a palindrome`);
  }
  $("body").append(result);
});

let isPalindrome = (str) => {
  str = str.toLowerCase();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}