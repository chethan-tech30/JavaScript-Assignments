//Question 1:
//Solution

for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log(i+" fizzbuzz");
    }
    else if(i%3==0){
        console.log(i+" fizz")
    }
    else if(i%5==0){
        console.log(i+" buzz")
    }
}

//Output:-
//3 fizz 5 buzz 6 fizz 9 fizz 10 buzz 12 fizz 15 fizzbuzz ans so on.

//Question 2:
//Solution

const student = {
    name : "Helsink",
    age : 24,
    projects : {
        diceGame : "Two player dice game using JavaScript"
    }
}

const {name, age, projects:{diceGame}} = student;
console.log(name,age,diceGame);

// Output:-
// Helsink 24 Two player dice game using JavaScript

//Question 3:
//Solution

let shoppingList = ["Panner","Dhal","Rice","Milk Powder","Juice"];
let shoppingBasket = [...shoppingList]
shoppingBasket.push("Ragi Flour");
shoppingBasket.push("Chips");
shoppingBasket.push("Rice Flour");
shoppingBasket.push("Chocolates");
shoppingBasket.push("Cake");
console.log(shoppingList);
console.log(shoppingBasket);

// Output:-
//["Panner", "Dhal", "Rice", "Milk Powder", "Juice"]
//["Panner", "Dhal", "Rice", "Milk Powder", "Juice", "Ragi Flour", "Chips", "Rice Flour", "Chocolates", "Cake"]

//Question 4:
//Solution

let add = (num1,num2) => num1+num2;
let sub = (num1,num2) => num1-num2;
let mul = (num1,num2) => num1*num2;
let div = (num1,num2) => num1/num2;
let sq_root = (num1) => Math.sqrt(num1);
let percentage = (num,per) => (num/100)*per;

num1 = prompt("Enter  number:1 to perform Calculator operations: ");
num2 = prompt("Enter  number:2 to perform Calculator operations: ");
num = prompt("Enter the number to calculate percentage: ")
per = prompt("Enter the Percentage: ")

num1 = Number(num1);
num2 = Number(num2);
num = Number(num)
per = Number(per)

let add_result = add(num1,num2);
let sub_result = sub(num1,num2);
let mul_result = mul(num1,num2);
let div_result = div(num1,num2);
let sqr_root = sq_root(num1);
let per_result = percentage(num,per);

console.log(`Addition of ${num1} and ${num2} is ${add_result}`);
console.log(`Subtraction of ${num1} and ${num2} is ${sub_result}`);
console.log(`Multiplication of ${num1} and ${num2} is ${mul_result}`);
console.log(`Division of ${num1} and ${num2} is ${div_result}`)
console.log(`Square root of ${num1} is ${sqr_root}`)
console.log(`Percentage of ${num} with percentage ${per}% is ${per_result}`)

//Question 5:
//Solution

let amount = prompt("Enter the total amount of employee that he get: ");
amount = Number(amount);
switch(true){
    case (amount>=20001):
        let sales1 = (5000*0.02)+(5000*0.05)+(10000*0.07)+((amount-20000)*0.1);
        console.log(`The total commission earned by him is ${sales1}rs`);
        break;
    case (amount>=10001 && amount<=20000):
        let sales2 = (5000*0.02)+(5000*0.05)+((amount-10000)*0.07);
        console.log(`The total commission earned by him is ${sales2}rs`);
        break;
    case (amount>=5001 && amount<=10000):
        let sales3 = (5000*0.02)+((amount-5000)*0.05);
        console.log(`The total commission earned by him is ${sales3}rs`);
        break;

    case (amount>0 && amount<=5000):
        let sales4 = amount*0.02;
        console.log(`The total commission earned by him is ${sales4}rs`);
        break;

    default: 
        console.log("You have entered an in-valid amount");
}

//Output: -
//The total commission earned by him is 735rs

//Question 6:
//Solution
function reWrite(){
    var number = prompt("Enter the number above 100: ");
    while(number>=100 && number || number && number>=100){
        number = prompt("Enter the number above 100: ");
    }
    console.log(`You entered ${number} please enter above 100`);
}
reWrite();

//Output:-
//You entered 5 please enter above 100

//Question 7:
//Solution

function checkIsPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function prime_display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( checkIsPrime(i) ) {
            arr.push(i);
        }
    }
    for(num of arr){
        console.log(`${num},`);
    }
}

let pnum = prompt("Enter the value of n: ")
prime_display(pnum);

//Output:-
//n = 10
//2,3,5,7

//Question 8:
//Solution

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

//Output:-
//Yes agreed.
