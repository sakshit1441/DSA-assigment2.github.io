// Q.1 Implement Binary Search

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const targetNumber = 12;

const index = binarySearch(numbers, targetNumber);

console.log(`Target number :- `+targetNumber);

if (index !== -1) {
  console.log(`Target number ${targetNumber} found at index ${index}.`);
} else {
  console.log(`Target number ${targetNumber} not found in the array.`);
}



// Output :- 

// Target number :- 12
// Target number 12 found at index 5.