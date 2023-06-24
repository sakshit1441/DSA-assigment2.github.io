// Q.5 Write a program to sort list of strings.

function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  const strings = ["banana", "apple", "orange", "grape", "kiwi"];
  bubbleSort(strings);
  
  console.log('Sorted String :- '+strings);
  

  // Output :- 
  // Sorted String :- apple,banana,grape,kiwi,orange