// write your func here
for(i=1 ; i<=100 ;i++){
  if( i%3===0 || i%5===0){
    if(i%3===0 && i%5!=0){
      console.log("Fizz");
    }
    if(i%5===0 && i%3!=0){
      console.log("Buzz");
    }
    if(i%3===0 && i%5===0){
      console.log("Fizz Buzz");
    }
  }else
  console.log(i);
}