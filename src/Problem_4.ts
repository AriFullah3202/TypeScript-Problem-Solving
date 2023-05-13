/*
Create a TypeScript class called Person that has private properties name and age, 
and a public method getDetails that returns a string with the person's name and age.
Use parameter properties to define and initialize the properties in the constructor.
*/

/*
Create a TypeScript class called Student that extends the Person class and has an additional private property grade.
 Define a public method getGrade that returns the student's grade.
Use the super keyword to call the constructor of the Person class and initialize the name and age properties.
*/
class Person {
    //two property are name and age
   private name : string;
   private age : number;

   // initialize the constructor
   constructor(name : string , age : number){
     this.name =name;
     this.age = age;
   }
   //this method will returns string
   public getDetails() : string{
      return `the person name is ${this.name} and age is ${this.age}`
   }

}
class Student extends Person{
    // this property of student
    private grade : string;
    // constructor of Student
    constructor(name : string , age : number , grade : string){
        //calling the super class Person
        super(name, age);
        this.grade = grade;
    }
    //this method returns grade
    public getGrade() : string{
       return `the grade is ${this.grade}`
    }
}
const p1 = new Person("arif" , 20);
console.log(p1.getDetails());

const st1 = new Student("arif" , 20 , "A+")
const grad = st1.getGrade();
console.log(grad);
console.log(st1);

