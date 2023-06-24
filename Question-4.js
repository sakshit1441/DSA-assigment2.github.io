// Q.4 Implement Insertion Sort.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  const numbers = [8, 2, 4, 1, 9, 6, 3, 7, 5];
  const sortedNumbers = insertionSort(numbers);
  console.log('Sorted Array :- '+sortedNumbers);
  

// Output :- 
// Sorted Array :- [1, 2, 3, 4, 5, 6, 7, 8, 9]