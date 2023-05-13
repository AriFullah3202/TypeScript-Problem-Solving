/*
Create a TypeScript program that uses a generic function to reverse an array of strings, 
and takes a variable number of strings to the array using rest parameters.
 Provide an example of calling the function with a variable number of strings.
*/




//takes a numbers of strings to the array
function reverseArray<T extends string>(...strings: T[]): T[] {
    return strings.reverse();
  }
  
  // calling the generic function

  //calling the reverseArray function
  const reversedArray = reverseArray("arif" , "afif" , "acib");
  //reverse print
  console.log(reversedArray); 
  
