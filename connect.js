
var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');


var draw = function(e){

    posX = e.offsetX;
    posY = e.offsetY;

    ctx.strokeStyle="black";
    ctx.fillStyle="#FF0000";

    var r  = Math.floor(Math.random()*50 + 10);
    ctx.arc(posX, posY, r, 0, 2*Math.PI);
    ctx.moveTo(posX,posY);

    ctx.stroke();
    ctx.fill();
    
    ctx.lineTo(posX,posY);
 }

canvas.addEventListener('click', draw);

var clearCanvas = function(e){
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
}

var clear = document.getElementById('clear');
clear.addEventListener('click', clearCanvas);

toggle.addEventListener('click', togglePen);
