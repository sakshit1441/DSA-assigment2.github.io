// Q.2 Implement Merge Sort.

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; 
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    const mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        mergedArr.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArr.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    while (leftIndex < left.length) {
      mergedArr.push(left[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex < right.length) {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  
    return mergedArr;
  }
  
  const numbers = [8, 2, 4, 1, 9, 6, 3, 7, 5];
  const sortedNumbers = mergeSort(numbers);
  console.log('Sorted Array :- '+sortedNumbers);

  // Output :- 
  // Sorted Array :- [1, 2, 3, 4, 5, 6, 7, 8, 9]

  