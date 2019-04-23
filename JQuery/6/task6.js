let result = $("<p>");

$("#button").click( () => {
  let inputValue = $("#input").val();
  let required = $("#required").val();
  let req = parseFloat(required);
  let arr = inputValue.split(" ");
  arr = arr.map((i) => parseFloat(i));
  let binSearch = binarySearch(arr, req);
  if(binSearch > -1) {
    result.text(`The index of the desired element ${binSearch}`);
  } else {
    result.text(`Desired element not found`);
  }

  $("body").append(result);
});

let binarySearch = (arr, required) => {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  if(required < arr[left] || required > arr[right]) return -1;
  let midle = Math.floor((right + left) / 2);

  while(arr[midle] !== required) {
    if(right - left === 1 && arr[left] !== required && arr[right] !== required) return -1;
    midle = Math.floor((right + left) / 2);
    if(arr[midle] > required) {
      right = midle;
    } else {
      left = midle;
    }
  }
  
  if(arr[midle] !== required) return -1;
  return midle;
}