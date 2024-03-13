// Armstrong No.
let number = 153;
let num = number;
let rem, cube;
let sum = 0;

let i=1;
while(num>0)
{
rem = num%10;
cube = rem*rem*rem;
sum = sum + cube;

num = parseInt(num/10);
i++;
}

if (number == sum) {
    console.log('It is an Armstrong number');
}
else{
    console.log('Not an Armstrong number');
}
