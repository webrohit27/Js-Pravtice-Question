let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let checkout = document.getElementById("checkout");

let sum = 0;
let serviceCharge;
let deliveryFee;
let total;

    box1.addEventListener("click", () => {
        sum = sum + 80;
    })

    box2.addEventListener("click", () => {
        sum = sum + 50;
    })

    box3.addEventListener("click", () => {
        sum = sum + 20;
    })

checkout.addEventListener("click", ()=>
{
    sum;
   serviceCharge = parseInt(sum / 10);
   deliveryFee = 45;
   total = sum + deliveryFee + serviceCharge ;
   console.log(total);
});

