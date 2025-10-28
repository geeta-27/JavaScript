// console.log("Hello World");


// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// let fullName = "Bro Code";
// let age = 25;
// let isStudent = true;

// console.log("Hello", age)
// console.log("You're age is", age)
// console.log("Student is ", isStudent)

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;



/*
   arithmetic expression is a combination of...
   operands (values, variables, etc.)
   operators (+ - * / %)
   that can be evaluated to a value
   ex. y = x + 5;
*/

// let students = 20;

// students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
// let extraStudents = students % 2;
//students = students ** 2;
// console.log(students);
// console.log(extraStudents);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/
//let result = (1 + 2) * (3 + 4);
//console.log(result);


// How to accept user input
// EASY WAY with a window prompt
// let username1 = window.prompt("What's your name?");
// console.log(username1);

// let usernam2=window.alert("You're done!")
// console.log(usernam2)

// DIFFICULT WAY HTML textbox
// let username;
// document.getElementById("myButton").onclick = function(){
    
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Hello " + username;
// }



// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

// let age = window.prompt("How old are you?");
// console.log(typeof age);
// age = Number(age);
// age += 1;
// console.log("Happy Birthday! You are", age, "years old");


// let x;
// let y;
// let z;
// let a;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean("pizza");
// a = Boolean("")

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
// console.log(a, typeof a);


// const = a variable that can't be changed
// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);
// //PI = 420.69;
// circumference = 2 * PI * radius;
// console.log("The circumference is:", circumference);



// Math =  an intrinsic object that provides basic mathematics functionality and constants
// let x = 3.14;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);
//x = Math.PI;
// console.log(x);


// Hypotenuse of Triangle
// let a=20;
// let b=25;
// let c;
// a=Math.pow(a, 2);
// b=Math.pow(b, 2);
// c=Math.pow(c, 2);
// c=Math.sqrt(a+b);
// console.log(c);

//-----Increase and Decrease button----
// let count=0;

// document.getElementById("decreasebtn").onclick=function(){
//     count-=1;
//     document.getElementById("countLabel").innerHTML=count;
// }
// document.getElementById("resetbtn").onclick=function(){
//     count=0;
//     document.getElementById("countLabel").innerHTML=count;
// }
// document.getElementById("increasebtn").onclick=function(){
//     count+=1;
//     document.getElementById("countLabel").innerHTML=count;
// }

//------------Random number----------------
// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = function(){

//     x = Math.floor(Math.random() * 6) + 1;
//     y = Math.floor(Math.random() * 6) + 1;
//     z = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("xlabel").innerHTML = x;
//     document.getElementById("ylabel").innerHTML = y;
//     document.getElementById("zlabel").innerHTML = z;
// }


// ----------useful string properties & methods------------

// let userName = "Bro Code";
// let phoneNumber = "123-456-7890";

//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();

// phoneNumber = phoneNumber.replaceAll("-", "/");

// console.log(phoneNumber);


// -----------------------Slicing---------------
// slice() extracts a section of a string 
//             and returns it as a new string, 
//             without modifying the original string

// let fullName = "Snoop Dogg";
// let firstName;
// let lastName;

// //firstName = fullName.slice(0, 3);
// //lastName = fullName.slice(4);

// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);


// -----------------Method chaining-------------------
// method chaining = calling one method after another
//                   in one continuous line of code

// let userName = "bro";
// let letter = userName.charAt(0).toUpperCase().trim();
// console.log(letter);

// if statement = a basic form of decision making
//                           if a condition is true, then do something
//                           if not, then don't do it!


// -------------------If and Else statement------------------
// let age = 21;

// if(age >= 65){
//     console.log("You are a senior citizen!");
// }
// else if(age >= 18){
//     console.log("You are an adult!");
// }
// else if(age < 0){
//     console.log("YOU HAVEN'T BEEN BORN YET!");
// }
// else{
//     console.log("You are a child!");
// }

// /*
// let online = false;

// if(online){
//     console.log("You are online!");
// }
// else{
//     console.log("You are offline!");
// }
// */


// document.getElementById("myButton").onclick = function(){

//   const myCheckBox = document.getElementById("myCheckBox");
//   const visaBtn = document.getElementById("visaBtn");
//   const mastercardBtn = document.getElementById("mastercardBtn");
//   const paypalBtn = document.getElementById("paypalBtn");

//   if(myCheckBox.checked){
//     console.log("You are subscribed!");
//   }
//   else{
//     console.log("You are NOT subscribed!");
//   }

//   if(visaBtn.checked){
//     console.log("You are paying with a Visa!");
//   }
//   else if(mastercardBtn.checked){
//     console.log("You are paying with a Mastercard!");
//   }
//   else if(paypalBtn.checked){
//     console.log("You are paying with PayPal!");
//   }
//   else{
//     console.log("You must select a payment type!");
//   }
// }

// ---------------Switch----------------------
// switch = statement that examines a value 
//                 for a match against many case clauses.
//                 More efficient that many "else if" statements

// let grade = "A";

// switch(grade){
 
//     case "A":
//       console.log("You did great!");
//       break;
   
//     case "B":
//       console.log("You did good!");
//       break;
 
//     case "C":
//       console.log("You did okay!");
//       break;
 
//     case "D":
//       console.log("You passed ... barely");
//       break;
 
//     case "F":
//       console.log("YOU FAILED!");
//       break;
 
//     default:
//       console.log(grade, "is not a letter grade");
// }

/*
let grade = 95;

switch(true){

    case grade >= 90:
        console.log("You did great!");
        break;

    case grade >= 80:
        console.log("You did good!");
        break;

    case grade >= 70:
        console.log("You did okay!");
        break;

    case grade >= 60:
        console.log("You passed ... barely");
        break;

    case grade > 60:
        console.log("You FAILED!");
        break;

    default:
        console.log(grade, "is not a letter grade!");
}
*/

// -----------------===------------------------------
// = assignment operator
// == comparison operator
// === strict equality operator

// let x = "3.14";

// if(x === 3.14){
//     console.log("That is pi");
// }
// else{
//     console.log("That is NOT pi");
// }

// ------------------------------------------------------------------------
// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

// let temp = 15;
// let sunny = false;

// if(temp > 0 && temp < 30 && sunny){
//     console.log('The weather is good!');
// }
// else{
//     console.log('The weather is bad!');
// }


// ---------------------------!---------------------------------------
// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false  false -> true

// let temp = 15;
// let sunny = false;

// if(!(temp > 0)){
//     console.log("It's cold outside");
// }
// else{
//     console.log("It's warm outside");
// }

// if(!sunny){
//     console.log("It's cloudy outside");
// }
// else{
//     console.log("It's sunny outside");
// }

//--------------------------------------------
// while loop = repeat some code 
//                       while some condition is true
//                       potentially infinite

// let userName = "";

// while(userName == "" || userName == null){
//     userName = window.prompt("Enter your name");
// }

// console.log("Hello", userName);


// -----------------------------------------------------
// do while loop = do something,
//                             then check the condition,
//                             repeat if condition is true

// let userName;

// do{
//     userName = window.prompt("Enter your name");
// }while(userName == "")

// console.log("Hello", userName);


// -----------------------------------------------------------
// for loop = repeat some code a 
//            certain amount of times
/*
for(let i = 1; i <= 10; i+=1){
    console.log(i);
}
*/
// for(let i = 10; i > 0; i-=1){
//     console.log(i);
// }

// console.log("HAPPY NEW YEAR!");



// ----------------------------------------
// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

// for(let i = 1; i <= 20; i+=1){
//     if(i == 13){
//         //break;
//         //continue;
//     }
//     console.log(i);
// }


// --------------------------------------------------
// nested loop = a loop inside of another loop

// let symbol = window.prompt("Enter a symbol to use");
// let rows = window.prompt('Enter # of rows');
// let columns = window.prompt('Enter # of columns');

// for(let i = 1; i <= rows; i+=1){
//     for(let j = 1; j <= columns; j+=1){
//         document.getElementById("myRectangle").innerHTML += symbol;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }


// -------------------------------------------------------------------------------
//function = Define code once, and use it many times.
//                   To perform some code, call the function name.

// startProgram();

// function startProgram(){
//     let userName = "Bro";
//     let age = 21;
    
//     happyBirthday(userName, age);
// }

// function happyBirthday(userName, age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday dear", userName);
//     console.log("Happy birthday to you!");
//     console.log("You are", age,"years old!");
// }


// ---------------------------------------------------------------------------
// return = returns a value back to the place 
//               where you invoked a function

// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is:", area);

// function getArea(width, height){
//     return width * height;
// }


// -------------------------------------------------------------------
// ternary operator = Shortcut for an 'if/else statement'
//                                  Takes 3 operands
 
//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False
 
// condition ? exprIfTrue : exprIfFalse
 
// let adult = checkAge(12);
// console.log(adult);
 
// function checkAge(age){
 
//     return age >= 18? true : false;
// }
/*
checkWinner(false);
 
function checkWinner(win){
 
    win ? console.log("You win!") : console.log("You lose!");
}
*/

// ---------------------------------------------------------------
// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

// for(let i = 1; i <= 3; i+=1){
//     //console.log(i);
// }

// doSomething();
// function doSomething(){
//     for(var i=0; i<=3; i+=1){
//         console.log(i);
//     }
// }

// console.log(i);


// -----------------------------------------------------------
// Template literals = delimited with (`)
//                                   instead of double or single quotes
//                                   allows embedded variables and expressions

// let userName = "Bro";
// let items = 3;
// let total = 75;

//console.log("Hello", userName);
//console.log("You have", items, "items in your cart");
//console.log("Your total is $", total);

//console.log(`Hello ${userName}`);
//console.log(`You have ${items} items in your cart`);
//console.log(`Your total is $${total}`);

// let text = 
// `Hello ${userName}<br>
// You have ${items} items in your cart<br>
// Your total is $${total}<br>`;

// //console.log(text);
// document.getElementById("myLabel").innerHTML = text;


// -------------------------------------------------------------
//toLocaleString() = returns a string with a language 
//                                sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

// let myNum = 123456.789;

//myNum = myNum.toLocaleString("en-US"); // US English
//myNum = myNum.toLocaleString("hi-IN"); // Hindi
//myNum = myNum.toLocaleString("de-DE"); // standard German

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//myNum = myNum.toLocaleString(undefined, {style: "percent"});
//myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

// console.log(myNum);


// --------------------------------------------------------------------------
// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function (){

//   let guess = document.getElementById("guessField").value
//   guesses+=1;
  
//   if(guess == answer){
//     alert(`${answer} is the #. It took you ${guesses} guesses`);
//   }
//   else if(guess < answer){
//     alert("Too small!");
//   }
//   else{
//     alert("Too large!");
//   }
// }


// ----------------------------Arrays-------------------------------------------
// array = think of it as a variable 
//              that can store multiple values

// let fruits = ["apple", "orange", "banana"];

//fruits[2] = "coconut";

//fruits.push("lemon");      //add an element
//fruits.pop();                     //removes last element
//fruits.unshift("mango"); //add element to beginning
//fruits.shift();                   //removes element from beginning

//let length = fruits.length;
//let index = fruits.indexOf("kiwi");
// let index=fruits.indexOf("banana");
// console.log(fruits);


// --------------------------------------------------------
// let prices = [5, 10, 15, 20, 25];

// /*
// for(let i = 0; i < prices.length; i+=1){
//     console.log(prices[i]);
// }
// */

// for(let price of prices){    //for up statement
//     console.log(price);
// }


// -----------------------------Sort-----------------------------
// let fruits = ["banana", "apple", "orange", "mango"];

// fruits = fruits.sort();
// //fruits = fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }


// ----------------------------------------------------------------
// 2D array = An array of arrays

// let fruits =           ["apples", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats =         ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[2][2] = "steak";

// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }


// ------------------------------------------------------------------

// spread operator(...) = allows an iterable such as an 
// ...                             array or string to be expanded 
//                                 in places where zero or more 
//                                 arguments are expected
//                                 (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let maximum = Math.max(...numbers);
// console.log(maximum);

/*
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1);
*/


// ----------------------------------------------------------------
// rest parameters(...) = represents an indefinite number
// ...                             of parameters
//                                (packs arguments into an array)

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c, d, e));

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total
// }


// ----------------------------------------------------------------
// callback = a function passed as an argument
//                    to another function.
 
//    Ensures that a function is not going
//    to run before a task is completed.
//    Helps us develop asynchronous code.
//    (When one function has to wait for another function)
//    that helps us avoid errors and potential problems
//    Ex. Wait for a file to load

// sum(2, 3, displayConsole);

// function sum(x, y, callBack){
//   let result = x + y;
//   callBack(result);
// }

// function displayConsole(output){
//   console.log(output);
// }

// function displayDOM(output){
//   document.getElementById("myLabel").innerHTML = output;
// }


// --------------------------------------------------------------------
//array.forEach() = executes a provided callback function
//                              once for each array element

// let students = ["spongebob", "patrick", "squidward"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element){
//     console.log(element);
// }


// ------------------------------------------------------------
//array.map() = executes a provided callback function
//                         once for each array element
//                         AND creates a new array

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// //numbers.forEach(print);
// //squares.forEach(print);
// //cubes.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }
// function cube(element){
//     return Math.pow(element, 3);
// }
// function print(element){
//     console.log(element);
// }


// -------------------------------------------------------------------------
//array.filter() = creates a new array with all elements 
//                         that pass the test provided by a function

// let ages = [18, 16, 21, 17, 19, 90];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element){
//     return element >= 18;
// }
// function print(element){
//     console.log(element);
// }


// --------------------------------------------------------------------------
//array.reduce() = reduces an array to a single value            

// let prices = [5, 10, 15, 20, 25, 30];
// let total = prices.reduce(checkOut);

// console.log(`The total is: $${total}`);

// function checkOut(total, element){
//     return total + element;
// }


// --------------------------------------------------------------------------
// let grades = [100, 50, 90, 60, 80, 70];

// grades = grades.sort(descendingSort);

// grades.forEach(print);

// function descendingSort(x, y){
//     return y - x;
// }
// function ascendingSort(x, y){
//     return x - y;
// }
// function print(element){
//     console.log(element);
// }


// -------------------------------------------------------------------------
// function expression = function without a name (anonymous function)
//                                        avoid polluting the global scope with names
//                                        write it, then forget about it
// ----------- Example 1 -----------
// const greeting = function(){
//     console.log("hello");
// }
// greeting();
// ----------- Example 2 -----------
// let count = 0;

// document.getElementById("increaseButton").onclick = function(){
//     count+=1;
//     document.getElementById("myLabel").innerHTML = count;
// }
// document.getElementById("decreaseButton").onclick = function(){
//     count-=1;
//     document.getElementById("myLabel").innerHTML = count;
// }


// -----------------------------------------------------------------------------
// arrow function expression = compact alternative to a traditional function expression
//      =>

// const grades1 = [100, 50, 90, 60, 80, 70];

// grades1.sort((x, y) => y - x);
// grades1.forEach((element) => console.log(element));

// // ----oR------

// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort(descending);
// grades.forEach(print);
// function descending(x, y){
//     return y-x;
// }
// function print(element){
//     console.log(element);
// }


// -------------------------Shuffle---------------------------------------------------------------
// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// shuffle(cards);

// console.log(cards);
// //console.log(cards[0]);
// //cards.forEach(card => console.log(card));

// function shuffle(array){
//   let currentIndex = array.length;

//   while(currentIndex != 0){
//     let randomIndex = Math.floor(Math.random() * array.length);
//     currentIndex-=1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
  
//   return array;
// }


// --------------------------------------------------
// nested functions = Functions inside other functions.
//                                   Outer functions have access to inner functions.
//                                   Inner functions are "hidden" from outside.
//                                   used in closures (future video topic)
 
// let userName = "Bro";
// let userInbox = 0;

// login();

// function login(){
    
//     let displayUserName=() => console.log(`Welcome ${userName}`);
//     let displayUserInbox=() => console.log(`You have ${userInbox} new messages`);
    
//     displayUserName();
//     displayUserInbox();
// }
// -------------OR------------------
 
// let userName = "Bro";
// let userInbox = 0;

// login();

// function login(){
//     displayUserName();
//     displayUserInbox();

//     function displayUserName(){
//         console.log(`Welcome ${userName}`);
//     }
//     function displayUserInbox(){
//         console.log(`You have ${userInbox} new messages`);
//     }
// }


// -------------------------------------------------------------------------------------
// closure =  A function with preserved and private data.
//                   Gives you access to an outer function’s scope,
//                   from an inner function.

// document.getElementById("loginButton").onclick = login();

// //userInbox = 420.69;

// function login(){
//     let userName = "Bro";
//     let userInbox = 1;

//     function alertUser(){
//         alert(`${userName} you have ${userInbox} new messages!`);
//         userInbox = 0;
//     }
//     return alertUser;
// }


// ----------------------------------------------------------------------------------
// Map = object that holds key-value pairs of any data type

// const store = new Map([
//   ["t-shirt", 20],
//   ["jeans", 30],
//   ["socks", 10],
//   ["underwear", 50]
// ]);

//store.get("t-shirt");
//store.set("hat", 40);
//store.delete("hat");
//console.log(store.has("underwear"));
//console.log(store.size);

// store.forEach((value, key) => console.log(`${key} $${value}`));


// ------------------------------------------------------------------------------
// error = object with a description of 
//             something that went wrong
        // (try{} and catch{} blocks)
// throw = executes a user-defined error

// try{
//   let x = window.prompt("Enter a #");
//   x = Number(x);

//   if(isNaN(x)) throw "That wasn't a number!";
//   if(x == "") throw "That was empty!";

//   console.log(`${x} is a number`);
// }
// catch(error){
//   console.log(error);
// }
// finally{
//   console.log("This always executes");
// }


// --------------------------------------------------------------------------------
// setTimeout() = invokes a function after a number of milliseconds            
//                            asynchronous function (doesn't pause execution) 

// let item = "cryptocurrency";
// let price = 420.69;

// let timer1 = setTimeout(firstMessage, 3000, item, price);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000);

// function firstMessage(item, price){
//     alert(`Buy this ${item} for $${price}`);
// }
// function secondMessage(){
//     alert(`This is not a scam!`);
// }
// function thirdMessage(){
//     alert(`DO ITT!`);
// }
// document.getElementById("myButton").onclick = function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert(`Thanks for buying!`);
// }


// -------------------------------------------------------------------------------------------
// setInterval() = invokes a function repeatedly after no. of milliseconds
//                          asynchronous function (doesn't pause execution) 

// let count = 0;
// let max = window.prompt("Count up to what #?");
// max = Number(max);
// const myTimer = setInterval(countUp, 1000);

// function countUp(){
//     count+=1;
//     console.log(count);
//     if(count >= max){
//         clearInterval(myTimer);
//     }
// }


// ----------------------------------------------------------------------------------------
// The Date object is used to work with dates & times

// let date = new Date();
//let date = new Date(0);
//let date = new Date(2023, 0, 1, 2, 3, 4, 5);
//let date = new Date("January 1, 2023 00:00:00");
/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/
/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/

// date = date.toLocaleString();
// document.getElementById("myLabel").innerHTML = date;

// function formatDate(date){
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     return `${month}/${day}/${year}`
// }
// function formatTime(date){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amOrPm = hours >= 12 ? "pm" : "am";

//     hours = (hours % 12) || 12;

//     return `${hours}:${minutes}:${seconds} ${amOrPm}`
// }


// ----------------------------------------------------------------
// const myLabel = document.getElementById("myLabel");

// update();
// setInterval(update, 1000);

// function update(){

//     let date = new Date();
//     myLabel.innerHTML = formatTime(date);

//     function formatTime(date){
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let amOrPm = hours >= 12 ? "pm" : "am";

//         hours = (hours % 12) || 12;

//         hours = formatZeroes(hours);
//         minutes = formatZeroes(minutes);
//         seconds = formatZeroes(seconds);

//         return `${hours}:${minutes}:${seconds} ${amOrPm}`;
//     }
//     function formatZeroes(time){
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;
//     }
// }


// --------------------------------------------------------------------------------------
// synchronous code = In an ordered sequence.
//                                      Step-by-step linear instructions
//                                     (start now, finish now)
 
// asynchronous code = Out of sequence.
//                                        Ex. Access a database
//                                              Fetch a file
//                                              Tasks that take time
//                                        (start now, finish sometime later)

// // synchronous
// console.log("START");

// // asynchronous
// setTimeout(() => console.log("This is asynchronous"), 5000);

// // synchronous
// console.log("END");


// ------------------------------------------------------------------------------------------------
// console.time() = Starts a timer you can use to 
//                               track how long an operation takes
//                              Give each timer a unique name.

//start
// console.time("Response time");

// alert("CLICK THE OK BUTTON!");
// //setTimeout(() => console.log("HELLO!"), 3000);

// //end
// console.timeEnd("Response time");


// ---------------------------------------------------------------------
// promise = object that encapsulates the result of an asynchronous operation
//                   let asynchronous methods return values like synchronous methods
//                   "I promise to return something in the future"

//           the STATE is 'pending' then: 'fulfilled' or 'rejected'
//           the RESULT is what can be returned
//           2 parts producing & consuming

// ------------- Example 1 -------------
// const promise = new Promise((resolve, reject) => {
 
//     let fileLoaded = false;
 
//     if(fileLoaded){
//         resolve("File loaded");
//     }
//     else{
//         reject("File NOT loaded");
//     }
// });
 
// promise.then(value => console.log(value))
//               .catch(error => console.log(error));

// ------------- Example 2 -------------
/*
const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));
*/


// -------------------------------------------------------------------------------
// async = makes a function return a Promise
// await = makes a function wait for a Promise
 
//   async function loadFile(){
//     let fileLoaded = true;
 
//     if(fileLoaded){
//         return "File loaded";
//     }
//     else{
//         throw "File NOT loaded";
//     }
//   }
 
// loadFile().then(value => console.log(value))
//                  .catch(error => console.log(error));


// ------------------------------------------------------------------------------------------
// async = makes a function return a Promise
// await = makes a function wait for a Promise

// async function loadFile(){

//   const promise = new Promise((resolve, reject) => {
//     let fileLoaded = true;

//     if(fileLoaded){
//         resolve("File loaded");
//     }
//     else{
//         reject("File NOT loaded");
//     }
//   })

//   try{
//     document.getElementById("myH1").innerHTML = await promise;
//   }
//   catch(error){
//     document.getElementById("myH1").innerHTML = error;
//   }
// }
// loadFile();


// -------------------ES6 Modules--------------------------------------------------------
// import {PI, getCircumference, getArea} from "./math_util.js";
// import * as MathUtil from "./math_util.js";

// console.log(MathUtil.PI);

// let circumference = MathUtil.getCircumference(10);
// console.log(circumference);

// let area = MathUtil.getArea(10);
// console.log(area);


// -----------------------DOM------------------------------------------------------------
// DOM = Document Object Model (API)
// An interface for changing the content of a page

// // console. dir(document) ;
// / /console. log(document . title) ;
// / /console. log(document . URL) ;
// //document.title = "Title goes here! " ;
// document.location = "http : //www.google.com" ;
// document . body. style. backgroundC010r = "skyblue" ;
// document . getE1ementByID( "myDiv" ) . innerHTML="Hello";


// ------------------------Selectors--------------------------------------
/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/
/*
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})
*/
/*
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";
*/
/*
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";
*/
/*
let element = document.querySelector("[for]");
element.style.backgroundColor = "lightgreen";
*/
/*
let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})
*/


// --------------------------------------------------------------------
// let element1=document.body;
// let child1=element1.firstElementChild
// child1.style.backgroundColor="lightgrey";

// let element2=document.body;
// let child2=element2.lastElementChild
// child2.style.backgroundColor="grey";

// let element3 = document.querySelector("vegetables");
// let parent = element3.parentElement;
// parent.style.backgroundColor="lightgreen";

// let element = document.querySelector("#fruit");
// let child = element.firstElementChild;
// child.style.backgroundColor = "lightgreen";

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)


// -----------------------------------------------------------------------
// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

// const nameTag = document.createElement("h1");
// nameTag.textContent = "Bro";
// document.body.append(nameTag);

//const myList = document.querySelector("#fruit");
//const listItem = document.createElement("li");
//listItem.textContent = "mango";
//myList.append(listItem);
//myList.prepend(listItem);
//myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);


// ------------------------------------------------------------------------
// to add/change CSS properties using JavaScript tutorial example explained
// const title = document.getElementById("myTitle");

// title.style.backgroundColor = "#222222";
// title.style.color = "rgb(50, 200, 250)";
// title.style.fontFamily = "consolas";
// title.style.textAlign = "center";
// title.style.border = "2px solid";
// title.style.display = "block";


// --------------------------Events-------------------------
//const element = document.getElementById("myButton");
//const element = document.body;
//const element = document.getElementById("myText");
//const element = document.getElementById("myDiv");

//element.onclick = doSomething;
//element.onload = doSomething;
//element.onchange = doSomething;
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;

// function doSomething(){
//     //alert("You did something!");
//     element.style.backgroundColor = "red";
// }
// function doSomethingElse(){
//     //alert("You did something!");
//     element.style.backgroundColor = "lightgreen";
// }


// -----------------------------------------------------------------
// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions

// const innerDive=document.getElementById("innerDiv");
// innerDiv. addEventListener("mouseover",changeRed) ;
// innerDiv. addEventListener("mouseout",changeGreen) ;
// function changeRed(){
//     innerDiv. style. backgroundC010r = "red";
// }
// function changeGreen(){
//     innerDiv. style. backgroundCoIor = "lightgreen";
//}

// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("click", changeBlue);
// outerDiv.addEventListener("click", changeBlue, true);

// function changeBlue(){
//     alert(`You selected ${this.id}`);
//     this.style.backgroundColor = "lightblue"
// }


// --------------------------------------------------------------------------------
// to show/hide HTML elements tutorial example displayed

// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");

// myButton.addEventListener("click", () => {

//     if(myImg.style.visibility == "hidden"){
//         myImg.style.visibility = "visible";
//     }
//     else{
//         myImg.style.visibility = "hidden";
//     }
// })


// ------------------------------------------------------------------------------
// key presses move down, up, right and left
// window.addEventListener("keydown", event => console.log(event.key));
// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// function move(event){
    
//     switch(event.key){
//         case "ArrowDown":
//             y+=5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y-=5;
//             myDiv.style.top = y + "px";
//             break;
//         case "ArrowRight":
//             x+=5;
//             myDiv.style.left = x + "px";
//             break;
//         case "ArrowLeft":
//             x-=5;
//             myDiv.style.left = x + "px";
//             break;
//         default:
//             break;
//     }
// }

// -----------------------Animation-------------------------------
// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", slide);
// //myButton.addEventListener("click", rotate);
// //myButton.addEventListener("click", scale);

// function slide(){
//     let timerId = null;
//     let x = 0;
//     let y = 0;

//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(x >= 200 || y >= 200){
//             clearInterval(timerId);
//         }
//         else{
//             x+=1;
//             y+=1;
//             myAnimation.style.top = y + 'px';
//             myAnimation.style.left = x + 'px';
//         }
//     }
// }
// function rotate(){
//     let timerId = null;
//     let degrees = 0;
 
//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(degrees >= 360){
//             clearInterval(timerId);
//         }
//         else{
//             degrees+=1;
//             myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//         }
//     }
// }
// function scale(){
//     let timerId = null;
//     let scaleX = 1;
//     let scaleY = 1;
 
//     timerId = setInterval(frame, 5);

//     function frame(){
//         if(scaleX <= 0.1 || scaleY <= 0.1){
//             clearInterval(timerId);
//         }
//         else{
//             scaleX-=0.01;
//             scaleY-=0.01;
//             myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
//         }
//     }
// }


// ------------------------Canvas API--------------------------------
// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
/*
//DRAW LINES
context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/
/*
//DRAW TRIANGLE
context.strokeStyle = "grey";
context.fillStyle = "yellow";
context.lineWidth = 10;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();
*/
/*
//DRAW RECTANGLE
context.fillStyle = "black";
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black";
context.strokeRect(250, 0, 250, 250);
*/
/*
//DRAW CIRCLE
//(x, y, r, sAngle, eAngle, counterclockwise)
context.fillStyle = "lightblue";
context.strokeStyle = "darkblue";
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/
//DRAW TEXT
// context.font = "50px MV Boli";
// context.fillStyle = "grey";
// context.textAlign = "center";
// context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);


// ---------------------------Window---------------------------
// window = interface used to talk to the web browser
//                   the DOM is a property of the window

const myButton = document.querySelector("#myButton");

//console.dir(window);
//console.log(window.innerWidth);
//console.log(window.innerHeight);
//console.log(window.scrollX);
//console.log(window.scrollY);

//console.log(window.location.href);
//window.location.href = "https://google.com";
//console.log(window.location.hostname);
//console.log(window.location.pathname);

//myButton.addEventListener("click", () => window.open("https://google.com"));
//myButton.addEventListener("click", () => window.close());
//myButton.addEventListener("click", () => window.print());

//window.alert("Hello!");
//window.confirm("Press OK to coninue!");
/*
let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}
*/

// ---------------------------Cookies---------------------------
// cookie = small text file stored on your computer
//                 used to remember information about the user
//                 data is stored in name=value pairs
//                 used for authentication, tracking, storing info
// const firstText = document.querySelector("#firstText");
// const lastText = document.querySelector("#lastText");
// const submitBtn = document.querySelector("#submitBtn");
// const cookieBtn = document.querySelector("#cookieBtn");

// submitBtn.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 365);
//     setCookie("lastName", lastText.value, 365);
// });
// cookieBtn.addEventListener("click", () => {
//     firstText.value = getCookie("firstName");
//     lastText.value = getCookie("lastName");
// });

// function setCookie(name, value, daysToLive){
//     const date = new Date();
//     date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
//     let expires = "expires=" + date.toUTCString();
//     document.cookie = `${name}=${value}; ${expires}; path=/`
// }
// function deleteCookie(name){
//     setCookie(name, null, null);
// }
// function getCookie(name){
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArray = cDecoded.split("; ");
//     let result = null;
    
//     cArray.forEach(element => {
//         if(element.indexOf(name) == 0){
//             result = element.substring(name.length + 1)
//         }
//     })
//     return result;
// }



// -----------------------------------NodeList----------------------------------------
// NodeList = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes

// ---------- CREATE A NODELIST ----------

// let buttons = document.querySelectorAll(".myButtons");

// ---------- ADD HTML/CSS PROPERTIES ----------

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😁";
// });

// ---------- CLICK event listener ---------- 

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     });
// });

// ----------  MOUSEOVER + MOUSEOUT event listener ---------- 

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });

// ---------- ADD AN ELEMENT ----------

// const newButton = document.createElement("button"); //STEP 1 
// newButton.textContent = "Button 5"; //STEP 2
// newButton.classList = "myButtons";
// document.body.appendChild(newButton); //STEP 3

// buttons = document.querySelectorAll(".myButtons");

// ---------- REMOVE AN ELEMENT ----------

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButtons");
//     });
// });
