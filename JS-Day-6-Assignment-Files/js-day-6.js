//Question 1:
//Solution

//Please Check all the solution by commenting one by one

function backgroundColorChange() {
    var colorArray = ["gold", "chartreuse", "blueviolet", "bisque", "darkorange", "darksalmon", "dimgrey", "fuchsia", "hotpink", "powderblue"];
    var colorIndex = 0;
    function changePageColor() {
        document.body.style.backgroundColor = colorArray[colorIndex];
        colorIndex = (colorIndex + 1) % (colorArray.length);
        setTimeout(changePageColor, 5000);
    }
    changePageColor();
}
backgroundColorChange();

// Question 2:
// Solution

function multiplicationTables() {
    var num = prompt("Enter the number to print multiplication table: ")
    num = Number(num);

    for (var i = 1; i <= 10; i++) {
        document.getElementById('tables').innerHTML += (`${num} x ${i} = ${num * i}<br>`);
    }

}
multiplicationTables();

//Question 3:
//Solution


let name = prompt("Enter you Name to print welcome message: ");
let displayName = document.getElementById('name');
displayName.innerHTML += ` ${name} Welcome to LetsUpgrade Free JavaScript Coding School`;

const clockTime = document.getElementById('time');

function displayClock() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    clockTime.innerText = time;
}

setInterval(displayClock, 1000);

function changeMode() {
    var darkMode = document.body;
    darkMode.classList.toggle('dark');
}

//Please Check all the solution by commenting one by one
