const array1 : number[] = [1, 3, 4, 5,];
const array2 : number[] = [1, 3, 4, 8,];

function takesArray  (x : number[] , y : number[]) : number [] {

    const result: number[] = [];

//   // Iterate over each element in the first array
//   for (const num1 of x) {
//     // Check if the element exists in the second array
//     if (y.includes(num1)) {
//       result.push(num1); // Add the common element to the result array
//     }
//   }
  x.forEach(num => y.includes(num) ? result.push(num) : "not match")

 return result
 
}
const num = takesArray(array1, array2);
console.log(num);

