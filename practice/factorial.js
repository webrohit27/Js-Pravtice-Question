//factorial Number

function factorialSeries(n) {
    // Initialize an empty array to store the factorials
    let factorials = [];
    
    // Calculate the factorial for each number up to n
    for (let i = 0; i <= n; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        factorials.push(factorial);
    }
    
    return factorials;
}

// Example usage
let n = 5;
let factorialSeriesResult = factorialSeries(n);
console.log(`Factorial series up to ${n}: ${factorialSeriesResult}`);