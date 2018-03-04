// const power = (num, pow) => {
//   // !RECURSION!
//   // The program must take two numbers as arguments
//   // It should return the number 'num' in power of number 'pow' (num ^ pow)
//   if (pow != 1) 
//     return num * power(num,pow - 1);
//     else
//     return num;
// }

// console.log(power(3,4));

// const range = (numA, numB) => {
//   // !RECURSION!
//   // The program must take two numbers as arguments
//   // It should return an array of numbers between numA and numB
//   // (the array should not include numA and numB)
//   let arr = [];
//   while(numA < numB){
//     arr.push(++numA);
//   }
//   arr.pop();
//   return arr;
// }

// console.log(range(2,8))

const factorial = (num) => {
  // !RECURSION!
  // The program must take a number as an argument
  // It should return the factorial of number 'num' (num!)
  // 
  // What is factorial?
  // Read 5! as "factorial of number 5"
  // it is basically a multiplication of all numbers from 1 to 'num' ('num' is non-negative)
  // 5! === 5 * 4 * 3 * 2 * 1 === 120
  // 4! === 4 * 3 * 2 * 1 === 24
  // 1! === 1
  // 0! === 1 
  if(num === 1)
  return 1;
  else
  return num * factorial(num - 1);
}

console.log(factorial(6))
console.log(factorial(5))
console.log(factorial(4))

const sumValues = (arr) => {
  // !RECURSION!
  // The program must take array of numbers as an argument
  // and return the sum of all values
}
