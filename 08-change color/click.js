const clickDiv=querySelector(".click");
const divtag=querySelectorAll("div")

const rgbOne=Math.floor(Math.random()*256);
const rgbTwo=Math.floor(Math.random()*256);
const rgbThree=Math.floor(Math.random()*256);


const backgroundClr=()=>{
divtag.style.background=`rgb(${rgbOne}, ${rgbTwo}, ${rgbThree})`
}
clickDiv.addEventListener("click",backgroundClr);