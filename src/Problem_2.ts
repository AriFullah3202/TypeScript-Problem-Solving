/*
Write a function that takes in an array of objects with properties name and age,
 and returns only the objects where the person's age is greater than or equal to 18,
 */

// perosn type declaration
type Persons = {
    name : string,
    age : number
}
//reciving array of persons and return the person array where the person's age is greater than or equal to 18
const checksThePersons = (person : Persons[]) : Persons[] =>{
  return person.filter(person => person.age >= 18)
}
// array of persons
const persons : Persons [] = [
    {name : "arif ullah" , age : 25},
    {name : "arif" , age : 2},
    {name : "habib" , age : 18}
]
// calling the function with array of persons and return the specific array of persons object
const resultPersons = checksThePersons(persons);
console.log(resultPersons);
