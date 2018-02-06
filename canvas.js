

var print = function(e){
    console.log("hi");
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pen = 0;

var getMousePos = function(canvas, evt){
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

var draw = function(e){
    console.log(e);
    console.log(e.x + ", " + e.y);
    var pos = getMousePos(canvas, e);
    posX = pos.x;
    posY = pos.y;

    // circle
    if (pen == 0 ){
	ctx.beginPath();
	ctx.strokeStyle="#FF0000";
	ctx.arc(posX, posY, Math.floor(Math.random()*50 + 10), 0, 2*Math.PI);
	ctx.stroke();
	ctx.closePath();
    }
    else{
	ctx.beginPath();
	ctx.strokeStyle="#0000FF";
	var rectW = Math.floor(Math.random()*50) + 10;
	var rectH = Math.floor(Math.random()*50) + 10;
	ctx.strokeRect(posX-(rectW/2), posY-(rectH/2), rectW, rectH); 
	ctx.closePath();
    }
    

}
canvas.addEventListener('click', draw);

var clearCanvas = function(e){
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
}

var clear = document.getElementById('clear');
clear.addEventListener('click', clearCanvas);

var togglePen = function(e){
    if (pen == 0){
	pen = 1;
    }
    else{
	pen = 0;
    }
}
var toggle = document.getElementById('toggle');
toggle.addEventListener('click', togglePen);
