// Q1. Falsy or Truthy?
// Given two values, return the first one if it is falsy, otherwise return the second one

// putting !! in front of any value will tell you if its falsy or truthy

function filterOutFalsy(elem1, elem2) {
  if (!elem1) {
    return elem1;
  }
  return elem2;
}

console.log(filterOutFalsy(0, 500));

function filterOutFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(filterOutFalsy(5, 500));

// Q2. Return the length of any given array
// Given an array, return its length

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3, 4]));

// Q3. Get the last element in an array
// Given an array, return the last element

function arrLength(arr) {
  return arr[arr.length - 1];
}

console.log(arrLength([0, 1, 2, 3]));

// Q4. Find the sum of an array
// Given an array, return the sum of every element

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    //This is how you loop through every element in an array
    sum = sum + arr[i];
  }
return sum;
}

console.log(arrSum([100, 200, 300]));

// Q5. Add up the numbers from a single number
// Given a number, add u pall the numbers from one to the number that is given.
// E.g. an input of 4 will give you 1 + 2 + 3 + 4, which equals 10

function progressiveSum (num){
    let sum = 0;
    for (let i = 1; i <= num; ++i ){
        sum = sum + i;
    }
    return sum

}

console.log(progressiveSum (5))

// Q6. Calculate the time
// Given a number in seconds, return this number in mm:ss format. 

function calcTime(seconds){

    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1){

        timerMinutes = '0' + timerMinutes
    }
    return timerMinutes + ':' + timerSeconds
    
}

console.log(calcTime(1000))

// Q7. Find the largest number
// Given an array of numbers, return the largest number of that array


function getMax (arr){
    let maxNum = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > maxNum){
            maxNum = arr[i]
        }
    }
    return maxNum
}


console.log(getMax([5, 100, 0]))


// Q8. Reverse a string
// Given a string, return the reversed string


// Incrementing For Loop
function reverseString(str){
    let reversedString = '';
    for (let i = 0; i < str.length; ++i){
    reversedString = str[i] + reversedString
    }
    return reversedString
}

console.log(reverseString('abc'))   

// Decrementing For loop
function reverseString (str){
    let reversedString = ''
    for (let i = str.length - 1; i >= 0; --i){
        reversedString = reversedString + str[i]
    }   
    return reversedString

}

console.log(reverseString('abc'))

// in order to convert a string into an array, you have to use .split(''). E.g., 'abc'.split('')
// in order to convert an array into a string, you have to use .join ('') 
// 'abc'.split('').reverse().join('')

function arrayReverse(str){
    return str.split('').reverse().join('')

}

console.log(arrayReverse('Anson'))


// Q9. Turn every element in an array into 0
// Given an array of elements, return the same length array filled with 0's

//For Loop

function convertToZeros (arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr[i] = 0;
    }
    return newArr;
}

console.log(convertToZeros([1, 2, 3, 4, 5]));

//Fill Method

function convertToZeros (arr){
    return new Array(arr.length).fill(0);
}

console.log(convertToZeros([2, 10, 6, 3, 1]))


// Map Method

function convertToZeros (arr){
 
    return arr.map (elem => /*return*/ 0)
    //To the right of the arrow, there is an invisible return
    //If you use curling brackets {} (to return an object) the return is NO LONGER there and you MUST add it


}

console.log(convertToZeros([5, 100, 0]))


// Q10. Filter out all the apples
// Given an array of fruits, if it is an apple remove it from the array

// For loop
function removeApples (arr){

    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if(arr [i] !== 'Apple'){
            newArr.push(arr[i])
        }
    }
}

console.log(removeApples(['Banana', 'Apple', 'Orange','Apple']))


// Array Filter
function removeApples (arr){
    return newArr = arr.filter(element =>  element !== 'Apple')
  
}

console.log(removeApples(['Banana', 'Apple', 'Orange','Apple']))


// Q11. Filter out all the falsy values
// Given an array of values, filter out all the falsy values and only return the truthy values


// For Loop
function filterOutFalsy(arr){
    let truthyArr = [];
    for (let i = 0; i < arr.length; i++){
        if(!!arr[i] === true){
            truthyArr.push(arr[i])

        }
    }
    return truthyArr

}

console.log (filterOutFalsy(['', NaN, 500, null, undefined, "0"]))


// Array Filter

// function filterOutFalsy(arr) {
//     return arr.filter(elem => !!elem === true);
// }

// console.log(filterOutFalsy(['Banana', NaN, undefined, null, false, 0]));

// Q12. Truthy to true, Falsy to false
//Given an array of truthy and falsy values, return the same array of elements into its boolean value

function convertToBoolean (arr){

    return arr.map(elem => !!elem)

}

console.log (convertToBoolean([500, 0 , "David", "", [], NaN, [].length]))