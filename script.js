
const player = {
    w: 10,
    h: 10,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
}

var canvas;
var canvasContext;
// var w = 10
// var h = 10
// var x = 200
// var y = 230
// var speed = 5
// var dx = 10
// var dy = 50

// var ballx = 50;
// var bally = 50;
// var ballspeedx = 15;
// var myTarget, myCanvas;
// let elem;


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
    // elem = document.getElementById('snake');
    canvasContext = canvas.getContext('2d');

    drawEverything();
    snake();
    // newPos();
    // moveUp();

    // var framesPerSecond = 30;
    // setInterval(function(){
    //     moveEverything();
    //     drawEverything();
    // }, 1000/framesPerSecond);
    // canvasContext.fillStyle = 'green';
    // canvasContext.fillRect(ballx,230,10,10);

// snake.addEventListener('keydown', function(e) {
//     switch (e.keyCode) {
//         case 37:
//             alert('left');
//             break;
//         case 38:
//            alert('up');
//             break;
//         case 39:
//             alert('right');
//             break;
//         case 40:
//             alert('down');
//             break;
//     }
// }, false);


        
}

// function ballReset(){
//     ballx = canvas.width/2;
//     bally = canvas.height/2;
// }



//can use this to reset snake to start position it hits wall
// function moveEverything(){
//     ballx = ballx + ballspeedx;
//     if(ballx < 0){
//         ballspeedx = -ballspeedx;
//         // alert("Hit wall")
//         // ballReset();
//     }
//     if(ballx > canvas.width){
//         ballspeedx = -ballspeedx;
//         // alert("Hit wall")

//     }
//     if(bally < 0){
//         ballspeedx = -ballspeedx;
//         // alert("Hit wall")
//     }
//     if(bally > canvas.height){
//         ballspeedx = -ballspeedx;
//         // alert("Hit wall")
//     }

// }


function drawEverything() {
    //might have to split this function up into three (background, apple, snake)
    // canvas = document.getElementById('gameCanvas');
    // canvasContext = canvas.getContext('2d');

    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(canvas.width/2,canvas.height/2,10,10);



    //put below in for loop (i.e. )
    // canvasContext.fillStyle = 'green';
    // canvasContext.fillRect(200,266,10,10);
    // canvasContext.fillStyle = 'green';
    // canvasContext.fillRect(200,254,10,10);
    // canvasContext.fillStyle = 'green';
    // canvasContext.fillRect(200,242,10,10);
    // canvasContext.fillStyle = 'green';
    // canvasContext.fillRect(200,230,10,10);
    
}

function newPos(){
    player.x += player.dx;
    player.y += player.dy;

    detectWalls();
}

function detectWalls(){
    if(player.x < 0){
        player.x = 0;
    }

    if(player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w;
    }

    if(player.y < 0){
        player.y = 0;
    }

    if(player.y + player.w > canvas.width) {
        player.y = canvas.width - player.w;
    }
}



function snake(){
    // moveDown();
    canvasContext.beginPath();
    canvasContext.fillStyle = 'green'
    canvasContext.fillRect(player.x, player.y, player.w, player.h);
    canvasContext.stroke();
}



function moveUp(){
    player.dy = -player.speed;
}

function moveDown(){
    player.dy = player.speed;
}

function moveRight(){
    player.dx = player.speed;
}

function moveLeft(){
    player.dx = -player.speed;
}

function keyDown(e) {
    if(e.key === 'ArrowRight' || e.key === 'Right'){
        moveRight();
    } else if(e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    } else if(e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    } else if(e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
}

function keyUp(e){
  if (
    e.key == 'Right' ||
    e.key == 'ArrowRight' ||
    e.key == 'Left' ||
    e.key == 'ArrowLeft' ||
    e.key == 'Up' ||
    e.key == 'ArrowUp' ||
    e.key == 'Down' ||
    e.key == 'ArrowDown'
  ) {
      player.dx = 0;
      player.dy = 0;
  }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


