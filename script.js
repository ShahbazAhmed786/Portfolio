let valueDisplays=document.querySelectorAll(".counter-number")
let interval=6000;
valueDisplays.forEach((valueDisplay)=>{
let startValue=0;
let endValue=parseInt(valueDisplay.getAttribute
    ("data-value"));
let duration=Math.floor(interval/endValue);
let counter=setInterval(function(){
    startValue +=1;
    valueDisplay.textContent=startValue;
    if(startValue==endValue){
        clearInterval(counter);
    }
}, duration);
});





   