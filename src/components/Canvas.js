import React, { useEffect } from 'react'
function Canvas(){
let mouseDown = false;
let lastPoint;
useEffect(()=>{
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let newPath = true;
canvas.addEventListener("mouseup", ()=>{
  mouseDown=false
  newPath=true
  lastPoint=null});
canvas.addEventListener("mousedown",()=>mouseDown=true);
canvas.addEventListener("mousemove",e=>{
if(!mouseDown){
return;
}
let rect = canvas.getBoundingClientRect();
let point = {x:e.clientX - rect.left,y:e.clientY - rect.top};
if(newPath){
context.beginPath();
newPath=false;
}
context.strokeStyle = "#ddd";
context.lineWidth= 10;
context.lineCap = "round"
context.moveTo(lastPoint?.x||point.x, lastPoint?.y||point.y);
context.lineTo(point.x, point.y);
context.stroke();
lastPoint = point;
})
})
return (
<canvas width="500px" height="375px" className="bg-white shadow-sm m-auto">Canvas Unsupported</canvas>
)
}
export default Canvas;
