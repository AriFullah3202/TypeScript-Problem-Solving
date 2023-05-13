type GenericType<X , Y> = [X , Y];
const relation : GenericType<string , string> = ["arif" , "ullah"]
console.log(relation);
const objectType : GenericType<object, object > = [{name : "arif"} , {age : 20}]
console.log(objectType)