let pricesInput = document.getElementById("prices");
let limitInput = document.getElementById("limit");
let discountInput = document.getElementById("discount");
let button = document.getElementById("button");

let priceWithDiscount = document.createElement("p");
let price = document.createElement("p");
let priceWithLimit = document.createElement("p");

button.addEventListener("click", () => {
  let prices = pricesInput.value.split(" ");
  prices = prices.map((elem) => parseFloat(elem));
  let limit = parseFloat(limitInput.value);
  let discount = parseFloat(discountInput.value);

  priceWithDiscount.innerText = `Price with discount = ${calcPriceWithDiscount(prices, discount)}`;
  price.innerText = `Price = ${calcPrice(prices)}`;
  priceWithLimit.innerText = `Price with limit = ${calcPriceWithLimit(prices, limit, discount)}`;

  document.body.appendChild(priceWithDiscount);    
  document.body.appendChild(price);
  document.body.appendChild(priceWithLimit);
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