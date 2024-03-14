// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const index = array.indexOf(5);

// console.log(index); // Output: 4 (index of the first occurrence of 5)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = array.findIndex(element => element > 5);

console.log(index); // Output: 5 (index of the first element greater than 5)
