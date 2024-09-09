// write your func here
function revers(str){
  let result="";
  let rvrs=str.split("").reverse();
  for(i=0; i<rvrs.length; i++){
    result=result.concat(rvrs[i]);
  }
  return result;
}

let inputStr =prompt("enter your string :");

console.log(revers(inputStr));