var canvas;
var canvasContext;
var ballx = 50;
var bally = 50;
var ballspeedx = 15;
var myTarget, myCanvas;
let elem;

// function calculateMousePos(evt) {
//     var rect = canvas.getBoundingClientRect();
//     var root = document.documentElement;
//     var mouseX = evt.clientX - rect.left - root.scrollLeft;
//     var mouseY = evt.clientY - rect.top - root.scrollTop;
//     return {
//         x:mouseX,
//         y:mouseY
//     };
// }

window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    elem = document.getElementById('snake');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(function(){
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(ballx,230,10,10);

snake.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            alert('left');
            break;
        case 38:
           alert('up');
            break;
        case 39:
            alert('right');
            break;
        case 40:
            alert('down');
            break;
    }
}, false);


        
}

// function moveSnake(){
//     canvas.addEventListener('keydown', function(event) {
//         alert('keydown');
//             }, false);
// });
// }

// function ballReset(){
//     ballx = canvas.width/2;
//     bally = canvas.height/2;
// }



//can use this to reset snake to start position it hits wall
function moveEverything(){
    ballx = ballx + ballspeedx;
    if(ballx < 0){
        ballspeedx = -ballspeedx;
        // alert("Hit wall")
        // ballReset();
    }
    if(ballx > canvas.width){
        ballspeedx = -ballspeedx;
        // alert("Hit wall")

    }
    if(bally < 0){
        ballspeedx = -ballspeedx;
        // alert("Hit wall")
    }
    if(bally > canvas.height){
        ballspeedx = -ballspeedx;
        // alert("Hit wall")
    }

}


function drawEverything() {


    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(canvas.width/2,canvas.height/2,10,10);



    //put below in for loop (i.e. )
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(200,266,10,10);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(200,254,10,10);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(200,242,10,10);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(200,230,10,10);
    
}

