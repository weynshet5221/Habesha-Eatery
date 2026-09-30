'use strict'
const reserve=document.querySelector("#reserve");
function render(){
    reserve.addEventListener("click",()=>{
        alert("reserved successfully!")
    })
}
render();