// Q.3 Implement Quick Sort.

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; 
    }
  
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const less = [];
    const greater = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
        continue; 
      }
  
      if (arr[i] <= pivot) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }
  
    const sortedLess = quickSort(less);
    const sortedGreater = quickSort(greater);
  
    return [...sortedLess, pivot, ...sortedGreater];
  }
  
  const numbers = [8, 2, 4, 1, 9, 6, 3, 7, 5];
  const sortedNumbers = quickSort(numbers);
  console.log('Sorted Array :- '+sortedNumbers);


  // Output :- 
  // Sorted Array :- [1, 2, 3, 4, 5, 6, 7, 8, 9]
  