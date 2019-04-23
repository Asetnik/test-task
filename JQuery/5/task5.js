let result = $("<p>");

$("#button").click( () => {
  let inputValue = $("#input").val();

  let value = (parseInt(inputValue));

  if(isSimpleNumber(value)) {
    result.text(`Number ${value} is a simple number`);
  } else {
    result.text(`Number ${value} is a composite number`);
  }
  $("body").append(result);
});

let isSimpleNumber = (num) => {
  let count = 0;

  for(let i = 1; i < num; ++i){
    if(num % i == 0) ++count;
    if(count > 1) return false;
  }
  
  return true;
}