//Question 1:
//Solution

const highOrderFunction = (num)=>{
    var arr = [];
    for(i=0;i<num;i++){
        var arrNum = prompt(`Enter ${num} numbers to push into array: `)
        arrNum = Number(arrNum);
        arr.push(arrNum);
    }
    console.log(arr) //[8, 7, 9, 6, 4, 2, 1, 3, 11, 21]
    let oddNum = arr.filter(num=> num%2!=0);
    console.log(oddNum) //[7, 9, 1, 3, 11, 21]
    let cubeNum = arr.filter(num=> num%2!=0).map(num=>Math.pow(num,3));
    console.log(cubeNum) //[343, 729, 1, 27, 1331, 9261]
}

let userNum = prompt("User enter how many number you want to push inside Array: ")
userNum = Number(userNum);
if(userNum<0){
    alert("Hey....!! User please enter positive numbers")
}
else{
    highOrderFunction(userNum);
}


//Question 2:
//Solution

class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.courses = [];
    }
    login(){
        console.log(`${this.name} has looged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has looged out`);
        return this;
    }
}
class Moderator extends User{
    addCoins(user){
       user.coins++;
       console.log(user);
       return this;
    }
    removeCoins(user){
       user.coins--;
       console.log(user);
       return this;
    }
}
class Admin extends Moderator{
    addCourses(user,course){
        user.courses.push(course);
        console.log(user);
    }
    deleteCourses(user,course){
       user.courses.pop(course)
       console.log(user);
    }
}
let user1 = new User("Sai sir",29,"ss@gmail.com")
let mod = new Moderator("Prasad sir",26,"p@gmail.com");
let admin = new Admin("me",25,"m@gmail.com");

user1.login();
mod.addCoins(user1);
mod.addCoins(user1);
admin.addCourses(user1,"python");
admin.addCourses(user1,"js");
mod.removeCoins(user1);
admin.deleteCourses(user1,"python");
user1.logout();

//Question 3:
//Solution

async function fetchToDos(){
    randNum = Math.floor(Math.random()*11);
    let todos = [];
    let completeTodos = [];
    await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${randNum}`)
      .then(res => res.json())
      .then(data => {
          todos = console.log(data)
          var str = JSON.stringify(data);
          console.log(str);
      })
      .catch(err => console.log(err));
}
fetchToDos();