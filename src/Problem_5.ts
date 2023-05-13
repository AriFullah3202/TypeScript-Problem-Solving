/*
Create a TypeScript function that takes a parameter of type unknown 
and uses a type guard to check whether the parameter is of type string.
 If it is, log the string to the console.
 If it is not, log an error message.
*/
const checkType = (param : unknown) : void =>{
   if(typeof param === "string"){
    console.log(param)
   }
   else{
    console.error(`error ! this is not a valid type.your type is ${typeof param}.`)
   }
   
}
checkType({})

