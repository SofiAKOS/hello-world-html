//1
function sumSliceArray(arr, first, second) {
    if (isNaN(first) || isNaN(second)) {
        throw new Error('Параметри first та second повинні бути числами');
      }
      if (first >= arr.length || second >= arr.length) {
        throw new Error('Параметри first та second повинні бути меншими за довжину масиву');
      }
      return arr[first] + arr[second];
 }
 //2
    function checkAge() {
        let name = prompt("What is your name?");
        let age = +prompt("What is your age?");
        let status = prompt("What is your status? (admin, moderator, user)");
      
        try {
          if (age < 18 || age > 70) {
            throw new RangeError("You are not allowed to watch this movie!");
          }
          if (!name || !age || !status) {
            throw new Error("The field is empty! Please enter your information.");
          }
          if (status !== "admin" && status !== "moderator" && status !== "user") {
            throw new EvalError("Invalid status entered!");
          }
          if (isNaN(age)) {
            throw new TypeError("Age must be a number!");
          }
      
          alert(`Welcome ${name}! You are ${age} years old and your status is ${status}. You can watch the movie now.`);
        } catch (error) {
          alert(`Error: ${error.name}. ${error.message}`);
        }
      }
       
//3
function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('Both parameters must be numbers.');
  }
  return width * height;
}

try {
  const width = 10;
  const height = '20'; 
  const area = calcRectangleArea(width, height);
  console.log(`The area of the rectangle is ${area}.`);
} catch (error) {
  console.error(error.message);
}

//4
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

function showMonthName(monthNum) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  if (monthNum < 1 || monthNum > 12) {
    throw new MonthException("Incorrect month number.");
  }
  
  return monthNames[monthNum - 1];
}

try {
  console.log(showMonthName(5)); 
  console.log(showMonthName(14)); 
} catch (e) {
  if (e instanceof MonthException) {
    console.log(e.message); 
  } else {
    console.log("Unexpected error:", e);
  }
}
//5
function showUser(id) {
  if (id < 0) {
    throw new Error('ID must not be negative: ' + id);
  }
  return { id: id };
}

function showUsers(ids) {
  var validIds = [];
  for (var i = 0; i < ids.length; i++) {
    try {
      var user = showUser(ids[i]);
      validIds.push(user);
    } catch (error) {
      console.log('Error:', error.message);
    }
  }
  return validIds;
}

console.log(showUsers([7, -12, 44, 22])); 


