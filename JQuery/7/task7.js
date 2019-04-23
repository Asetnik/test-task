$("#button").click( () => {
  $("#result").remove();
  let result = $("<div>", {id: "result"});
  let inputValue = $("#input").val();
  let arr = inputValue.split(" ");
  result.append($("<p>").text(`Amount numbers: `));
  for(key in obj = amountNumbers(arr)) {
    result.append($("<p>").text(`${key}: ${obj[key]}`));
  }
  $("body").append(result);
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