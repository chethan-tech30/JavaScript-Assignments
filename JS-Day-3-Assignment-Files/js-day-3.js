//Question: 1
//Check the given number is even or odd

function numberIsEvenOrOdd(number){
    if(number%2===0){
        return `The number entered is ${number} and Number is even`;
    }
    else{
        return `The number entered is ${number} and Number is odd`;
    }
}
var number = prompt("User enter one number to check whether the given number is even or odd: ");
number_result = numberIsEvenOrOdd(number);
console.log(number_result);
//Output: The number entered is 23 and Number is odd 


//Question: 2
//Taking OS name and version from user and displaying in the console.
let os_name_version = prompt("User enter OS name and Version: ");
split_str = os_name_version.split(" ");
console.log(`The OS name is ${split_str[0]} and version is ${split_str[1]}`);
//Output: The OS name is Android and version is 9

//Question: 3
//Marks card with Grade
//Using If-Else-If-Else
let marks = prompt("Enter the marks: ");
if(marks<35){
    console.log(`Marks are ${marks} and grade is D`);
}
else if(marks>=35 && marks<45 ){
    console.log(`Marks are ${marks} and grade is C`);
}
else if(marks>=45 && marks<60 ){
    console.log(`Marks are ${marks} and grade is B`);
}
else if(marks>=60 && marks<85 ){
    console.log(`Marks are ${marks} and grade is A`);
}
else{
    console.log(`Marks are ${marks} and grade is A+`);
}
//Output: Marks are 50 and grade is B

//Using Ternary Operator
let markss = prompt("Enter the marks(Using Ternary Operator): ");
let result = (markss<35) ? `Marks are ${markss} and grade is D`:
             (markss>=35 && markss<45) ? `Marks are ${markss} and grade is C`:
             (markss>=45 && markss<60) ? `Marks are ${markss} and grade is B`:
             (markss>=60 && markss<85) ? `Marks are ${markss} and grade is A`: 
             `Marks are ${marks} and grade is A+`;
console.log(result)
//Output: Marks are 50 and grade is B

//Using Switch Case
let marksss = prompt("Enter the marks(Using Switch Case): ");
switch(true){
    case (marksss<35):
        console.log(`Marks are ${marksss} and grade is D`);
        break;
    case (marksss>=35 && marksss<45):
        console.log(`Marks are ${marksss} and grade is C`);
        break;
    case (marksss>=45 && marksss<60):
        console.log(`Marks are ${marksss} and grade is B`);
        break;
    case (marksss>=60 && marksss<85):
        console.log(`Marks are ${marksss} and grade is A`);
        break;
    case (marksss>=85):
        console.log(`Marks are ${marksss} and grade is A+`);
        break;
}
//Output: Marks are 50 and grade is B