var canvas;
var canvasContext;
var ballx = 50;
var ballspeedx = 15;

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    
    var framesPerSecond = 30;
    setInterval(function(){
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(ballx,230,10,10);
}

function moveEverything(){
    ballx = ballx + ballspeedx;
    if(ballx < 0){
        ballspeedx = -ballspeedx;
        // alert("Hit wall")
    }
    if(ballx > canvas.width){
        ballspeedx = -ballspeedx;
        // alert("Hit wall")
    }

}

function drawEverything() {


    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(canvas.width/2,canvas.height/2,10,10);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(ballx,230,10,10);
    
}

//  function createSecondBox(){
//     canvasContext.fillStyle = 'red';
//     canvasContext.fillRect(0,0,30,30);
    
//  }
