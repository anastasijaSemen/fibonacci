const n = parseInt(prompt("Enter the number"));
alert(n+ "'s Fibonacci number is " + fibonacciNumber(n));


function fibonacciNumber(n) {
    let fibonacciNumbers = [0, 1, 1];
    let i = 3;
    while (i <= n) {
        fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
        i++;
    };
    return fibonacciNumbers[n];

}