function longest(sent){
  let arrStr=sent.split(" ");
  let maxlen=0;
  let indexStr=0;
  for(i=0;i<arrStr.length;i++){
    if(maxlen< arrStr[i].length){
      maxlen=arrStr[i].length;
      indexStr=i;
    }
  }
  return arrStr[indexStr];
  }
  let inpSentence=prompt("enter your sentence:");
  console.log(longest(inpSentence));