/*
Binary Search Algorithm=>

BINARY-SEARCH(A, start, end, x)
  if start <= end
    middle = floor((start+end)/2)
    if A[middle]==x
      return middle

    if A[middle]>x
      return BINARY-SEARCH(A, start, middle-1, x)

    if A[middle]<x
      return BINARY-SEARCH(A, middle+1, end, x)

  return FALSE // in case, element is not in the array
  
*/

// => Iterative Approach : In this iterative approach, instead of recursion, we use a while loop, and the loop runs until it hits the base condition, i.e. start becomes greater than end.

const arr = [30, 80, 60, 40, 90, 70, 20, 50, 10, 100];

function ItrativeBinarySearch(arr, target) {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log("sortedArr", sortedArr);

  let start = 0,
    end = sortedArr.length - 1;

  console.log(start, end);

  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2); // If element is present at mid, return mid.
    if (arr[mid] === target) return arr[mid];
    // Else look in left or right half accordingly
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}
console.log(ItrativeBinarySearch(arr, 20));
