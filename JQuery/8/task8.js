let withSubstr = $("<p>");
let withoutSubstr = $("<p>");

$("#button").click( () => {
  let inputValue = $("#input").val();
  let arrayStrings = inputValue.split(". ");
  let req = $("#required").val();
  let separatedStrings = separateStrings(arrayStrings, req);
  withSubstr.text(`Whith subsrting: ${separatedStrings["withSubstr"]}`);
  withoutSubstr.text(`Whithout subsrting: ${separatedStrings["withoutSubstr"]}`);
  $("body").append(withSubstr);
  $("body").append(withoutSubstr);
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