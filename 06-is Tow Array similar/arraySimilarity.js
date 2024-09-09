// write your func here
function equalArray(arr1,arr2){
  if(arr1.length == arr2.length){
    for(let i of arr1){
      if(arr1[i]===arr2[i]){
        return true;
      }else
      return false;
    }
  }else{
    return false;
  }
}
let arr1=[1,2,3];
let arr2=[1,2,3];

console.log(equalArray(arr1,arr2))