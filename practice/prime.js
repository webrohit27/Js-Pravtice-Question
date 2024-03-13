// Prime Number

let num = 110;
let num1 = 0;

for(let i=2; i<num; i++) {
    if (num % i == 0) {
        num1 = 1;
        console.log('No. is not a Prime');
        break;
    }
}
if (num1 == 0) {
    console.log('No. is Prime');
}