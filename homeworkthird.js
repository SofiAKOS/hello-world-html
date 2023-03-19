//1
function compact(arr) {
    return arr.filter(function(item, index) {
      return arr.indexOf(item) === index;
    });
  }

  //2

  function createArray(start, end) {
    const result = [];
  
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  
    return result;
  }
  
  let arr = createArray(2, 9);
  console.log(arr); // [2,3,4,5,6,7,8,9]
  
  //3

  function printNumbers(a, b) {
    console.log(a);
    for (let i = a + 1; i <= b; i++) {
      for (let j = 0; j < i - a + 1; j++) {
        console.log(i); 
      }
    }
  }
  
  //4

  function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
      arr.push(Math.floor(Math.random() * 500) + 1);
    }
    return arr;
  }
  
  console.log(randArray(5)); 

  //5

  function separateArrays(arr) {
    let numbers = [];
    let strings = [];
    let booleans = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        numbers.push(arr[i]);
      } else if (typeof arr[i] === 'string') {
        strings.push(arr[i]);
      } else if (typeof arr[i] === 'boolean') {
        booleans.push(arr[i]);
      } else if (Array.isArray(arr[i])) {
        let subArrays = separateArrays(arr[i]);
        numbers = numbers.concat(subArrays[0]);
        strings = strings.concat(subArrays[1]);
        booleans = booleans.concat(subArrays[2]);
      }
    }
  
    return [numbers, strings, booleans];
  }
  
  //6

  function calc(a, b, op) {
    let result;
    
    if (op === 1) {
      result = a - b;
    } else if (op === 2) {
      result = a * b;
    } else if (op === 3) {
      result = a / b;
    } else {
      result = a + b;
    }
    
    return result;
  }
//7

function findUnique(arr) {
    const set = new Set(arr);
    return set.size === arr.length;
  }
  
  console.log(findUnique([1, 2, 3, 5, 3])); 
  console.log(findUnique([1, 2, 3, 5, 11]));
  

