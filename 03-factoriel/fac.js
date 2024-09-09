// write your func here

function factoriel(num){
  let result=1;
  if(num===0){
    return 1;
  }
  while(num>0){
    result = result*num;
    num--;
  }
  return result;
}

let num =Number(prompt("enter your number :"));
console.log(factoriel(num));
