function findSecondLargest(arr) {
    // Sort the array in descending order
    arr.sort(function(a, b) {
        return b - a;
    });
    
    // Remove duplicates
    arr = arr.filter(function(item, pos) {
        return arr.indexOf(item) === pos;
    });
    
    // Return the second element, if available
    if (arr.length >= 2) {
        return arr[1];
    } else {
        return "No second largest element found";
    }
}

const array = [3, 6, 2, 8, 4, 9, 10];
console.log(findSecondLargest(array)); // Output: 9
