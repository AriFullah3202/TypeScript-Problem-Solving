/*
Create a TypeScript program that declares a function that takes two parameters, a string and a number. 
The function should log the string parameter repeated the number of times specified by the number parameter. 
If the number parameter is not provided, it should default to 3.
*/
// the function takes two parameters a string and a number and print the string how many number you are given .
const printStringByTheNumber = (stringParam : string, numberParam : number = 3) => {
    for (let index = 0; index < numberParam; index++) {
        console.log(stringParam)
    }
}
// calling
printStringByTheNumber( "next level" ,3 )

