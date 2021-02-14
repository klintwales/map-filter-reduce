import emojipedia from "./emojipedia"
//var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.




// const meaningsArray = emojipedia.map(function(num, index){
//   return(emojipedia[index].meaning);
// });
//
// const charArray = meaningsArray.map(function(meaning){
//   return(meaning.substring(0,100));
//
// });

//combined two commented out methods above. Finds all of the meaning sections of each element in each array and then shrinks them down to 100 characters
const simplArray = emojipedia.map(function(num){
  return(num.meaning.substring(0,100));
});



// console.log(meaningsArray);
// console.log(charArray);
console.log(simplArray);




//access each meaning section of the array
//take each meaning and shrink it down
//add each slimmed down meaning to a new array
