/*1.Write a function which receives an array and a number as arguments and returns a new array

from the elements of the given array which are larger than the given number.
*/

function myFunction(arr, number) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
          if (arr[i] > number) {
          newArray.push(arr[i]);
      }
  }
      if (newArray.length === 0) {
       return "“Such values do not exist.”";
      }
   else 
       return newArray;
}

/*5. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting

order is violated.
*/


function myFunction(arr) {
for (let i = 0; i < arr.length; i++) {
   if (arr[i] > arr[i+1]) {
       return i+1;
   }
}
return -1;
}