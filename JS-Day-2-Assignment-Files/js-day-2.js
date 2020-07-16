//Write a JS code which takes input from the user and logs it in the console.
let user_input = prompt("Hey, User please enter your input: ");
console.log(user_input);

//Javascript String methods

//serach()
let str1 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(str1.search("friends")); //4

//slice()
let str2 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(str2.slice(16,20)); //gold

//substring()
let str3 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(str3.substring(4,11));

//substr()
let str4 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(str4.substr(22,3));

//replace()
let str5 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
replaced_str = str5.replace("gold","sliver");
console.log(replaced_str);

//trim()
let str6 = "       LetsUpgrade FCS      ";
trim_str = str6.trim();
console.log(trim_str);


//charCodeAt()
let str7 = "LetsUpgrade Javascript";
console.log(str7.charCodeAt(12));

//fromCharCode()
let char = String.fromCharCode(97);
console.log(char)

//includes()
let str8 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(str8.includes("diamonds"));

//localeCompare()
let a = "hi";
let b = "jk";
let op = a.localeCompare(b);
console.log(op);

//match()
let match = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(match.match(/gold/g));

//repeat()
let string = "LetsUpgrade";
console.log(string.repeat(5));

//search()
let str9 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(str9.search("hold"));

//slice()
let str10 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(str10.slice(0,3));

//startsWith()
let str11 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(str11.startsWith("Old"));
console.log(str11.startsWith("gold"));

//toLocaleLowerCase()
let str12 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(str12.toLocaleLowerCase());

//toLocaleUpperCase()
let str13 = "Old friends are gold. New friends are diamonds, If you get diamonds, don't forget gold because only gold can hold a diamonds.";
console.log(str13.toLocaleUpperCase());

//toString()
let str14 = "LetsUpgrade1563";
console.log(str14.toString());

//valueOf()
let str15 = "LetsUpgrade";
console.log(str15.valueOf());

//Javascript String methods

//copyWithin()
let name1 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
console.log(name1.copyWithin(1,0));

//entries()
let name2 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
let arr = name2.entries();
for(i of arr){
    console.log(i);
}

//every()
let age = [25,85,96,15,24];
function checkAge(age){
    return age>=18;
}
console.log(age.every(checkAge));//false

let ages = [25,85,96,20,24];
function checkAgee(ages){
    return ages>=18;
}
console.log(ages.every(checkAgee));//true

//fill()
let name3 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
console.log(name3.fill("LetsUpgrade"))

//filter()
let age_filter = [20,85,96,15,24];
function checkAge(ages){
    return ages>=21;
}
console.log(age_filter.filter(checkAge));//[85, 96, 24]

//find()
let age_find = [20,85,96,15,24];
function checkAge(ages){
    return ages>=21;
}
console.log(age_find.find(checkAge));//85

//findIndex()
let age_find_index = [20,85,96,15,24];
function checkAge(ages){
    return ages>=21;
}
console.log(age_find_index.findIndex(checkAge));//1

//forEach()
let name4 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
name4.forEach(forEachFunc);
function forEachFunc(item,index){
    console.log(item+","+index);//0,Sai sir,1,Prasad sir,2,Kshitij sir,3,Sandesh sir,4,Pooja mam
}

//from()
let array = Array.from("LetsUpgrade");
console.log(array);//["L", "e", "t", "s", "U", "p", "g", "r", "a", "d", "e"]

//includes()
let name5 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
console.log(name5.includes("Pooja mam"));//true

//join()
let name6 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
console.log(name6.join());//Sai sir,Prasad sir,Kshitij sir,Sandesh sir,Pooja mam

//keys()
let name7 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
let key = name7.keys();
for(i of key){
    console.log(i);//0,1,2,3,4
}

//lastIndexOf()
let name8 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
console.log(name8.lastIndexOf("Prasad sir"));//1

//map()
let numbers = [2,4,6,8,10];
let sqrt_num = numbers.map(Math.sqrt);
for(i of sqrt_num){
    console.log(i);//1,2,2.45,2.52,3.16
}

//reduce()
let number = [125, 100, 25];
let func = number.reduce(myFunc);
function myFunc(total, num) {
  return total + num;
}
console.log(func);//250

//reduceRight()
let number1 = [125, 100, 25];
let func1 = number1.reduce(myFunc);
function myFunc(total, num) {
  return total + num;
}
console.log(func1);//250

//slice()
let name9 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
console.log(name9.slice(0,2));//output: ["Sai sir", "Prasad sir"]

//some()
let ages_some = [3,10,21,18,50];

function checkAdult(age) {
  return age >= 21;
}
console.log(ages_some.some(checkAdult));//true

//sort()
let name10 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
console.log(name10.sort());//output: ["Kshitij sir", "Pooja mam", "Prasad sir", "Sai sir", "Sandesh sir"]

//splice()
let name11 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
console.log(name11.splice(0,2,"Veena mam","Sachin sir"));//output: ["Sai sir", "Prasad sir"]
console.log(name11);//output: ["Veena mam", "Sachin sir", "Kshitij sir", "Sandesh sir", "Pooja mam"] 

//toString()
let name12 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
console.log(name12.toString());//output: Sai sir,Prasad sir,Kshitij sir,Sandesh sir,Pooja mam 

//valueOf()
let name13 = ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"];
console.log(name13.valueOf());//output: ["Sai sir","Prasad sir","Kshitij sir","Sandesh sir","Pooja mam"]