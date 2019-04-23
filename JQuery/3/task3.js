let result = $("<p>");
let inputValue = $("#input").val();

$("#button").click( () => {
  if($("#input").val() < 2) {
    result.text(`Number must be greater than 2`);
  } else {
    result.text(`The first ${inputValue} Fibonacci numbers ${fibonacciNumbers(parseInt(inputValue))}`);
  }
  $("body").append(result);
});

let fibonacciNumbers = (n) => {
  let arr = [0, 1];
  if(n > 2) {
    for(let i = 3; i <= n; ++i) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }
  return arr;
}