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