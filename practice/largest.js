

let arr = [11, 7, 9, 1, 27];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i] ;
    }
    
}

console.log(largest);