// Implementation of Linear Search in JavaScript.

/* Linear Search steps

I think that with this algorithm, the gif below explains it all. But here are the steps in words:

    1> Linear search will accept an array and a target value.
    2> Start searching from the beginning of the array.
    3> Check if that value equals the target:

    If so, stop and return that values index.
    If not, move onto the next element.

    4> Repeat step 3 until all elements are checked. If target not found, return -1. */

const arr = [9, 6, 5, 8, 4, 1, 7, 3, 2, 0, 4];

function linearSearch(arr, target) {
  for (const i in arr) {
    if (arr[i] === target) {
      return i;
    }
  }
}

// function linearSearch return index of trget element.
console.log(linearSearch(arr, 9)); // Here Time Complexity (Best) O(1)
console.log(linearSearch(arr, 7)); // Here Time Complexity (Average) O(n)
console.log(linearSearch(arr, 2)); // Here Time Complexity (Average) O(n)
console.log(linearSearch(arr, 0)); // Here Time Complexity (Worst) O(n)
// and Space Complexity	O(1) in all three cases (Best, Average, Worst)

//-------------------------------------------------------------------------------------------------------------

// Implementation of Linear Search in JavaScript under the hood in the JavaScript built-in methods ==>

/* 1> indexOf() method =>
    The indexOf() method can take two perameters 1st is the "target value" and 2nd is "start at position".

    syntex => array.indexOf(searchvalue, start) or string.indexOf(searchvalue, start).

    The indexOf() method returns the position (index) of the first occurrence of a value in a string or array.

    The indexOf() method returns -1 if the value is not found.

    The indexOf() method is case sensitive.*/

console.log(arr.indexOf(5));

/* 2> includes() method =>
    The includes() method can take two perameters 1st is the "target value" and 2nd is "start at position".

    The includes() method return boolean value.

    syntex => array.includes(searchvalue, start) or string.includes(searchvalue, start).

    The includes() method returns true if a string or array contains a specified value.(the first occurrence of a value in a string or array.)

    Otherwise it returns false.

    The includes() method is case sensitive.
*/

console.log(arr.includes(4));

/* 3> find() method =>
    syntex => array.find(function(currentValue, index, arr),thisValue).

    The find() method returns the value of the first element that passes a test.

    The find() method executes a function for each array element.

    The find() method returns undefined if no elements are found.

    The find() method does not execute the function for empty elements.

    The find() method does not change the original array.

*/

console.log(arr.find((i) => i === 8));

/* 4> findIndex() method =>
    syntex => array.findIndex(function(currentValue, index, arr), thisValue)

    The findIndex() method executes a function for each array element.

    The findIndex() method returns the index (position) of the first element that passes a test.

    The findIndex() method returns -1 if no match is found.

    The findIndex() method does not execute the function for empty array elements.

    The findIndex() method does not change the original array.
*/

console.log(arr.findIndex((i) => i === 8));
