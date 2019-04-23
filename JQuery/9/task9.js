let priceWithDiscount = $("<p>");
let price = $("<p>");
let priceWithLimit = $("<p>");

$("#button").click( () => {
  let prices = $("#prices").val().split(" ");
  prices = prices.map((elem) => parseFloat(elem));
  let limit = parseFloat($("#limit").val());
  let discount = parseFloat($("#discount").val());

  priceWithDiscount.text(`Price with discount = ${calcPriceWithDiscount(prices, discount)}`);
  price.text(`Price = ${calcPrice(prices)}`);
  priceWithLimit.text(`Price with limit = ${calcPriceWithLimit(prices, limit, discount)}`);

  $("body").append(priceWithDiscount);    
  $("body").append(price);
  $("body").append(priceWithLimit);
});

let calcPriceWithDiscount = (arr, discount) => {
  let result = arr.reduce((sum, price) => {
    return sum += price - price * discount / 100;
  }, 0);
  return result;
}

let calcPrice = (arr) => {
  let result = arr.reduce((sum, price)=>{
    return sum += price;
  }, 0);
  return result;
}

let calcPriceWithLimit = (arr, limit, discount) => {
  let result = arr.reduce((sum, price)=>{
    if(price < limit){
      sum += price;
    }else{
      sum += price - price * discount / 100;
    }
    return sum;
  }, 0);
  return result;
}