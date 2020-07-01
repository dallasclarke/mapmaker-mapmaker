/******************
 * YOUR CODE HERE *
******************/

const doubleAll = function (num) {
  let results = [];
  
  for (let i = 0; i < num.length; i++) {
    results.push(num[i] * 2)
  }
  return results
}

const yelledGreetings = function (arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] + '!')
  }
  return results
}

const absoluteValues = function (num) {
  let results = [];

  for (let i = 0; i < num.length; i++) {
    results.push(Math.abs(num[i]))
  }
  return results;
}

const upperCaseFirstLetters = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let firstChar = str[0].toUpperCase();
    let otherLetters = str.slice(1).toLowerCase()
    let fullName = firstChar + otherLetters;
    result.push(fullName)
  }
  return result
}

const changeToInitials = function (initials) {
  let result = [];
    for (let i = 0; i < initials.length; i++) {
      let str = arr[i]
      let firstChar = str.slice(0).toUpperCase();
    }

}


const doubleOdd = function (num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1 || num[i] % 2 === -1) {
      result.push(num[i] * 2)
    } else {
      result.push(num[i])
    }
  }
  return result;
}





/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
