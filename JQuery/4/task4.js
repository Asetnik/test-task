let result = $("<p>");

$("#button").click( () => {
    let inputValue = $("#input").val();
    result.text(`The factorial of ${inputValue} is ${factorial(parseInt(inputValue))}`);
    $("body").append(result);
});

let factorial = (n) => {
    let result = n;

    while(n - 1 > 0) {
        result *= n-1;
        --n;
    }
    
    return result;
}