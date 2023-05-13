// javascript map funciton 
const arrayofNumber = [1, 2, 4];
const arrayOfString = arrayofNumber.map(number => number.toString)

interface Person {

    firstName: string;
  
    lastName: string;
  
  }
  
  
  
  function fullName<T extends Person>(person: T): string {
  
    return `his ${person.firstName} ${person.lastName}`;
  
  }
   const heello = fullName({firstName : "idid" , lastName : "lsl"})
   console.log(heello);

  
  