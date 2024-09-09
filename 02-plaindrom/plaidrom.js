// write your func here
function palinrom(str){
  let revrs=str.split("").reverse().join("");
  if(str===revrs){
    return true;
  }else{
    return false;
  }
}
let inpstr =prompt("enter your string :");
console.log(palinrom(inpstr));