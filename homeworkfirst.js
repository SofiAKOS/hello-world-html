//2.
console.log("Kos");
//3.
let x = 10;
let y = 30;
console.log(x);
console.log(y);
y = x;
console.log(x);
console.log(y);
//4.
const differentObjects = {
        stringProperty: 'Hello from Sophie',
        numberProperty: 39,
        booleanProperty: true,
        undefinedProperty: undefined,
        nullProperty: null
      
    };
    //5.
    const isAdult = confirm('Ви досягли повнолітнього віку?');
console.log(isAdult);
//6.
let firstName = "Sofia";
let lastName = "Kos";
let group = "S0-92";
let birthYear = 2004;
let isMarried = false;
console.log(birthYear);
console.log(isMarried);
console.log(firstName + " " + lastName);
console.log(typeof birthYear);
console.log(typeof isMarried);
console.log(typeof firstName);
console.log(typeof nullVariable);
console.log(typeof undefinedVariable);
let nullVariable = null;
let undefinedVariable = undefined;
//7.
const login = prompt("Введіть ваш логін:");
const email = prompt("Введіть вашу електронну пошту:");
const password = prompt("Введіть ваш пароль:");

alert(`Dear user! Your email- ${email}, and password- ${password}.`);
