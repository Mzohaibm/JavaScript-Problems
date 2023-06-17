// problem 1
// 1:Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
function getCurrentDayAndTime() {
  const now = new Date();
  const currentDay = now.getDay();
  let day;
  switch (currentDay) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    default:
      day = 'Invalid day';
  }
  let hours = now.getHours();
  const amOrPm = hours >= 12 ? 'AM' : 'PM';
  hours %= 12;
  hours = hours || 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const currentTime = `${hours} ${amOrPm} : ${minutes} : ${seconds}`;

  document.getElementById('day').innerHTML = `Today is: ${day}`;
  document.getElementById('time').innerHTML = `Current time is: ${currentTime}`;
}
getCurrentDayAndTime();
// 2:Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
// second problem
function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  var result;

  if (operation === "multiplication") {
    result = num1 * num2;
  } else if (operation === "division") {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Sorry Cannot divide by zero";
    }
  } else {
    result = "Sorry! Invalid operation";
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}
// 3:how to push data in array?
var values = [];
function addValue() {
  var value = document.getElementById("valueInput").value;
  values.push(value);
  document.getElementById("valueInput").value = "";
  displayValues();
}
function displayValues() {
  var valueList = document.getElementById("valueList");
  valueList.innerHTML = "";
  for (var i = 0; i < values.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = values[i];
    valueList.appendChild(listItem);
  }
}
// 4:how to push data in Array of object?
var person = {};

function addPerson() {
  let name = document.getElementById("nameInput").value;
  let age = document.getElementById("ageInput").value;
  let city = document.getElementById("cityInput").value;
  person.name = name;
  person.age = age;
  person.city = city;
  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";
  document.getElementById("cityInput").value = "";

  displayPerson();
}

function displayPerson() {
  var personData = document.getElementById("personData");
  personData.innerHTML = "";

  var name = person.name;
  var age = person.age;
  var city = person.city;

  var displayText = "Name: " + name + "<br>" +
    "Age: " + age + "<br>" +
    "City: " + city;
  personData.innerHTML = displayText;
}
console.log(total);
// 5:how to push data in object:
// push data in object
const Students = {
  Name: ["Ali", "Ahmad", "Asad"],
  Class: "10th",
  City: "Lahore",
};
Students.age = [20, 12, 14];
console.log(Students);
for (let i of Object.values(Students)) {
  console.log(Object.keys(Students), i);
}
