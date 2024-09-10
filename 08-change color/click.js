const clickDiv=document.querySelectorAll(".click");

const backgroundClr=()=>{
  const rgbOne=Math.floor(Math.random()*256);
  const rgbTwo=Math.floor(Math.random()*256);
  const rgbThree=Math.floor(Math.random()*256);
  return `rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`;
}
clickDiv.forEach(div =>{
  div.addEventListener("click",()=>div.style.backgroundColor=backgroundClr());
});

