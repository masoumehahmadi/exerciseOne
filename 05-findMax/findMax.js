// write your func here
function maximum(arr){
  return Math.max(...arr);
}
let num =prompt("enter your number with spaces between them :").split(" ");
let numArray=num.map(Number);
console.log(numArray)
console.log(maximum(numArray));
