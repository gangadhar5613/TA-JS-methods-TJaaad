// Test using EXAMPLE functions given below each function.

/*
  Create a function named addTwo which accepts a number, adds 2 to the number and return the new value.
*/

function addTwo(num){
  return num+2;
}

/*
  Create a function named addThree which accepts a number, adds 3 to the number and return the new value.
*/

function addThree(num){
  return num + 3;
}

/*
  Create a function named addFive which accepts a number, adds 5 to the number and return the new value.
*/

function addFive(num){
  return num + 5;
}

/*
  Create a function named addTwoToArray which accepts:
    - An array of numbers
    - Returns a new array where 2 is added to each element
    - While doing so use the funciton addTwo
*/

function addTwoToArray(arr){
  for ( num of arr){
    
  }return addTwo(num);
}

/*
  Create a function named addThreeToArray which accepts:
    - an array of numbers
    - aeturns a new array where 2 is added to each element
    - while doing so use the funciton addThree
*/

function addThreeToArray(arr){
  for(num of arr){
    return addThree(num);
  }
}

/*
  Create a function named addFiveToArray which accepts:
    - an array of numbers
    - aeturns a new array where 2 is added to each element
    - while doing so use the funciton addThree
*/

function addFiveToArray(arr){
  for(num of arr){
    return addFive(num);
  }
}

/*
In above function addTwoToArray, addThreeToArray, addFiveToArray we are repeating the code, let's fix this.

  Create a function named changeArray which accepts two arguments:
    - an array of numbers
    - a callback function
    - pass each element of array to the callback function
    - and store the value returned from callback function in a new array
    - return the new array

  EXAMPLE:
    changeArray([1, 2, 3, 4, 5, 6], addTwo); // [3, 4, 5, 6, 7, 8]
    changeArray([1, 2, 3, 4, 5, 6], addThree); // [4, 5, 6, 7, 8, 9]
    changeArray([1, 2, 3, 4, 5, 6], addFive); // [6, 7, 8, 9, 10, 11]
*/

function changeArray(arr,cb){
  let finalResult = [];
  for(num of arr){
     finalResult.push(cb(num));
  }
  return finalResult;
}

// EXAMPLE:
changeArray([1, 2, 3, 4, 5, 6], addTwo); // [3, 4, 5, 6, 7, 8]
changeArray([1, 2, 3, 4, 5, 6], addThree); // [4, 5, 6, 7, 8, 9]
changeArray([1, 2, 3, 4, 5, 6], addFive); // [6, 7, 8, 9, 10, 11]


/*
  Create a function called sendMessage that accepts two arguments:
    - a string (message) and a function (callback).
    - it will return the result of the callback function called with the message as argument

  EXAMPLE:
    sendMessage("Hello", console.log);
    sendMessage("Hello Alert!", alert);
    sendMessage("Hello Prompt!", prompt);
*/

function sendMessage(message,cb){
    let result = cb(message);
    return result;
}

sendMessage("Hello", console.log);
sendMessage("Hello Alert!", alert);
sendMessage("Hello Prompt!", prompt);

/*

 Create a function named `first` that accepts an argument a function (callback) and return the same function defination.

*/

function first(cb){
  return cb();
}

/*
 Create a function named `second`
  - Inside second create another function named `third` which accepts a number, adds 1 to it and returns it
  - Return the function defination (third) from the second function
  - Also write the required code to call the function
*/

function second(){
  function third(number){
    return number + 1;
    
  }
  return third();
}
second();

/*
 Write a function named `callMe` which 
  - accept a function (callback function) as argument.
  - Store the value returned by calling the callback function in a variable named `final`
  - return final varibale from the function.
  - also write the required code to call the function.
*/

// function callMe(cb){
//   let final = cb();
//   return final;
// }
// callMe();


// Data Starts (Don't change this)
const people = [
  { name: 'John Doe', age: 16 },
  { name: 'Thomas Calls', age: 19 },
  { name: 'Liam Smith', age: 20 },
  { name: 'Jessy Pinkman', age: 18 },
];

const grades = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
];
// Data Ends

/*
  Create a function named isAdult which accepts:
    - an object
    - returns true or false based on the `age` property in the object is greater than 18 or not

  EXAMPLE:
    isAdult(people[0]); // false
    isAdult(people[1]); // true
    isAdult(people[2]); // true
*/

function isAdult(obj){
  return obj.age > 18;
}



isAdult(people[0]); // false
isAdult(people[1]); // true
isAdult(people[2]); // true

/*
  Create a function named isMale which accepts:
    - an object
    - returns true or false based on the `sex` property in the object is `M` or not

  EXAMPLE:
    isMale(grades[0]); // true
    isMale(grades[1]); // false
    isMale(grades[2]); // true
*/

function isMale(obj){
  for ( value in obj ){
    if(value.sex == "M"){
      return true;
    }
  }return false;
  
}

isMale(grades[0]); // true
isMale(grades[1]); // false
isMale(grades[2]); // true

/*
  Create a function named isFemale which accepts:
    - an object
    - returns true or false based on the `sex` property in the object is `F` or not

  EXAMPLE:
    isFemale(grade[0]); // false
    isFemale(grade[1]); // true
    isFemale(grade[2]); // false
*/

function isFemale(obj){
  for(value in obj){
    if(value.sex == "F"){
      
    } return true;
  }
  return false;
}

isFemale(grades[0]); // false
isFemale(grades[1]); // true
isFemale(grades[2]); // false

/*
  Create a function named isGradeA which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is greater than 12 or not

  EXAMPLE:
    isGradeA(grade[0]); // false
    isGradeA(grade[1]); // false
    isGradeA(grade[2]); // true
*/

function isGradeA(obj){
  for(value in obj){
    if (value.grade > 12){

    }return true;
  }return false;
}

isGradeA(grades[0]); // false
isGradeA(grades[1]); // false
isGradeA(grades[2]); // true

/*
  Create a function named isGradeB which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is greater than 8 and less than or equal to 12 or not
  
  EXAMPLE:
    isGradeB(grade[0]); // true
    isGradeB(grade[1]); // true
    isGradeB(grade[2]); // false
*/

function isGradeB(obj){
  for (value in obj){
    if(value.grade > 8 && value.grade <= 12){
      
    }return true;
  }return false;
  
}
isGradeB(grades[0]); // true
isGradeB(grades[1]); // true
isGradeB(grades[2]); // false

/*
  Create a function named isGradeC which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is less than or equal to 8  or not

  EXAMPLE:
    isGradeC(grade[0]); // true
    isGradeC(grade[1]); // false
    isGradeC(grade[2]); // false
*/

function isGradeC(obj){
  for ( value in obj){
    if( value.grade <= 8){
       return true;
    }
    return false
  }
}

isGradeC(grades[0]); // true
isGradeC(grades[1]); // false
isGradeC(grades[2]); // false

/*
  Create a function named filterAdult which accepts:
    - an array of objects
    - returns a new array with the value of age greater than 18 or not
    - while doing so use the funciton isAdult you created earlier
  
  EXAMPLE:
    filterAdult(people);

  Output: 
    [
      { name: 'Thomas Calls', age: 19 },
      { name: 'Liam Smith', age: 20 },
    ];
*/

function filterAdult(obj){
  let final = [];
  for ( value of obj){
    if(isAdult(obj)){
      final.push(value);
    }
  }return final;
}

/*
  Create a function named filterMale which accepts:
    - an array of objects
    - returns a new array with the value of sex is `M` or not
    - while doing so use the funciton isMale you created earlier

  EXAMPLE:
    filterMale(grades);

  Output: 
    [
      { name: 'John', grade: 8, sex: 'M' },
      { name: 'Bob', grade: 16, sex: 'M' },
      { name: 'Johnny', grade: 2, sex: 'M' },
      { name: 'Ethan', grade: 4, sex: 'M' },
      { name: 'Donald', grade: 5, sex: 'M' },
    ];
*/

function filterMale(obj){
  let final = [];
  for ( value in obj){
    if(isMale(value.sex)){
       final.push(value);
    }
  }
  return final;
}



/*
  Create a function named filterFemale which accepts:
    - an array of objects
    - returns a new array with the value of sex is `F` or not
    - while doing so use the funciton isFemale you created earlier

  EXAMPLE:
    filterFemale(grade);

  Output: 
    [
      { name: 'Sarah', grade: 12, sex: 'F' },
      { name: 'Paula', grade: 18, sex: 'F' },
      { name: 'Jennifer', grade: 13, sex: 'F' },
      { name: 'Courtney', grade: 15, sex: 'F' },
      { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/


function filterFemale(obj){
  let final = [];
  for (value of obj){
    final.push(isFemale(value));
  }return final;
}

/*
  Create a function named filterGradeA which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater than 12 or not
    - while doing so use the funciton isGradeA you created earlier

  
  EXAMPLE:
    filterGradeA(grades);

  Output: 
    [
      { name: 'Sarah', grade: 12, sex: 'F' },
      { name: 'Paula', grade: 18, sex: 'F' },
      { name: 'Jennifer', grade: 13, sex: 'F' },
      { name: 'Courtney', grade: 15, sex: 'F' },
      { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/

function filterGradeA(arr){
  let final = [];
  for ( value of arr){
    final.push(isGradeA(arr));
  }return final;
}

/*
  Create a function named filterGradeB which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater than 8 and less than or equal to 12 or not
    - while doing so use the funciton isGradeB you created earlier

  EXAMPLE:
    filterGradeB(grade);

  Output: 
    [
     { name: 'Sarah', grade: 12, sex: 'F' },
     { name: 'Johnny', grade: 2, sex: 'M' },
     { name: 'Ethan', grade: 4, sex: 'M' },
     { name: 'Donald', grade: 5, sex: 'M' },
     { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/

function filterGradeB(arr){
  let final = [];
  for ( value of arr){
    final.push(isGradeB(value));
  }return final;
}

/*
  Create a function named filterGradeC which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater less or equal to 8 or not
    - while doing so use the funciton isGradeC you created earlier

  EXAMPLE:
    filterGradeC(grade);

  Output: 
     [
      { name: 'John', grade: 8, sex: 'M' },
      { name: 'Johnny', grade: 2, sex: 'M' },
      { name: 'Ethan', grade: 4, sex: 'M' },
      { name: 'Donald', grade: 5, sex: 'M' },
    ]
*/

function filterGradeC(arr){
  let final = [];
  for ( value of arr){
    final.push(isGradeC(value));
  }return final;
}


/*
We are repeating lots of code in above functions like filterGradeC, filterGradeB, filterGradeA, filterAdult. We will fix
this by making a higher order function named filter. Now using one function filter we will be able to filter anything we want.
filter is a higher order function.

  Create a function named filter which accepts:
    - an array of objects
    - a callback function (which should return true or false)
    - call the callback function with each object of array
    - if callback function returns true add to new array otherwise don't
    - returns a new array

  EXAMPLE:
    filter(people, isAdult);
    filter(grades, isMale);
    filter(grades, isFemale);
    filter(grades, isGradeA);
    filter(grades, isGradeB);
    filter(grades, isGradeC);
*/

function filter(obj,cb){
  let final = [];
  for ( value in obj){
    final.push(cb(value));
  }return final;
}

/*
  Create a function named multiplyBy which accepts:
    - a number (num)
    - and returns a function
    - returned function accepts another number (num2) and return num * num2

  EXAMPLE:
    let multiplyByFive = multiplyBy(5);
    multiplyByFive(10); // 50
    multiplyByFive(20); // 100
    multiplyByFive(5); // 25

    
    let multiplyByNine = multiplyBy(9);
    multiplyByFive(10); // 90
    multiplyByFive(20); // 180
    multiplyByFive(5); // 45
*/

function multiplyBy(num){
 return function(num2){
   return num * num2;
 }
}

// let multiplyByFive = multiplyBy(5);
//     multiplyByFive(10); // 50
//     multiplyByFive(20); // 100
//     multiplyByFive(5); // 25

let multiplyByNine = multiplyBy(9);
    multiplyByNine(10); // 90
    multiplyByNine(20); // 180
    multiplyByNine(5); // 45

