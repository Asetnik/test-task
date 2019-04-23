let pMin = $("<p>");
let pMax = $("<p>");

$("#button").click( () => {
  let inputValue = $("#input").val();
  pMin.text(`${getMinElem(inputValue.split(" "))} is the minimal element`);
  pMax.text(`${getMaxElem(inputValue.split(" "))} is the maximum element`);
  $("body").append(pMin);
  $("body").append(pMax);
});

let getMinElem = (arr) => Math.min.apply(null, arr);

let getMaxElem = (arr) => Math.max.apply(null, arr);