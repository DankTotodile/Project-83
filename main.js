canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "";
width = 0;
mouseEvent = "empty";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mousedown";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}  
cx = 0;
cy = 0;
lx = 0;
ly = 0; 
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    cx = e.clientX - canvas.offsetLeft;
    cy = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown")
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(lx, ly);
    ctx.lineTo(cx, cy);
    ctx.stroke();        
}
lx = cx;
ly = cy;   
}   

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    cx = e.touches[0].clientX - canvas.offsetLeft;
    cy = e.touches[0].clientY- canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    cx = e.touches[0].clientX - canvas.offsetLeft;
    cy = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(lx, ly);
    ctx.lineTo(cx, cy);
    ctx.stroke();

    lx = cx;
    ly = cy;
}