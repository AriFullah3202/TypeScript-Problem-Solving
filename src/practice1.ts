// define our tuple
let ourTuple: [number, string, string , boolean, string];
// initialize correctly
ourTuple = [101,"ema", " jhon" , false, "2023"];
// you can push this array . but it is not type safty
ourTuple.push(true)
console.log(ourTuple);

// define our readonly tuple . 
const ourReadonlyTuple: readonly [number, string, string , boolean, string] = [101,"ema", "jhon" , false, "2023"];
// this line will give you error because you can not push . 
//ourReadonlyTuple.push("2025")