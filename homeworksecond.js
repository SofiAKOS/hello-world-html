//1
let x = 1;
let y = 2;
let a = x;
let b = y;
let c = 3;

let res1 = "" + x + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = a < b < c + "" + 2;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = a < b && b < c;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x / 'a';
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//2 
let isAdult = prompt(" Are you of legal age? (Yes/No)");
if (isAdult === "Yes") {
    console.log(" You have reached the age of majority");
} else {
    console.log ("You are still too young");
}
//3

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

let frequencies = {};
arr.reduce(function(acc, val) {
  if(val in acc) {
    acc[val]++;
  } else {
    acc[val] = 1;
  }
  return acc;
}, frequencies);

let maxFrequency = Math.max(...Object.values(frequencies));
let data = parseInt(Object.keys(frequencies).find(function(key) {
  return frequencies[key] === maxFrequency;
}));

let result = [data];
arr = arr.filter(function(value) {
  return value !== data;
});

console.log(result); // [5]
console.log(arr); // [4, 2, 1, 6, 3, 2]

//4

let a = parseFloat(prompt("4"));
let b = parseFloat(prompt("9"));
let c = parseFloat(prompt("6"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
  console.log("Incorrect data");
} else {
  let p = (a + b + c) / 2;
  let triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log("Площа трикутника: " + triangleArea.toFixed(3));
  
  let sides = [a, b, c];
  sides.sort(function(x, y) {
    return y - x;
  });
  
  if (Math.pow(sides[0], 2) === Math.pow(sides[1], 2) + Math.pow(sides[2], 2)) {
    console.log("Трикутник є прямокутним");
  } else {
    console.log("Трикутник не є прямокутним");
  }
}
//5

let date = new Date();
let hour = date.getHours();

if(hour >= 23 || hour < 5) {
  console.log("Доброї ночі");
} else if(hour >= 5 && hour < 11) {
  console.log("Доброго ранку");
} else if(hour >= 11 && hour < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}

