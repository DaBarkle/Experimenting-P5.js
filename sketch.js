var x = 0;
var y = 0;
var z = 0;
var yCanvas = 600;
var xCanvas = 600;
var xCenterpoint = xCanvas / 2;
var yCenterpoint = yCanvas / 2;
var xBoundary = xCanvas;
var r = xCenterpoint / 3;
var shape = "circle"
var shapeAlgo = shape === "square" ? colorSquare : (colorCircle2 && colorCircle);

function setup() {
  var myCanvas = createCanvas(xCanvas, yCanvas);
  background(100);
  myCanvas.parent('myContainer');
  frameRate(300);
  

}
function draw() {
  
  shapeAlgo();
  cEllipse();
  tBoundary();
  pLog();
}


// changeColor function used to change Ellipse color based on distance from centerpoint
function colorCircle2(){

  if ((dist( x, y, xCenterpoint, yCenterpoint) >= r / 2 )){

    fill(100, 104, 0);
  }  else {
    fill(50, 255, 0);
  } 
}
function colorCircle(){

  if ((dist( x, y, xCenterpoint, yCenterpoint) >= r )){

    fill(230, 104, 0);
  }  else {
    fill(215, 255, 0);
  } 
}
// function colorCircle2(){

//   if ((dist( x, y, xCenterpoint, yCenterpoint) >= r / 2 )){

//     fill(100, 104, 0);
//   }  else {
//     fill(50, 255, 0);
//   } 
// }

function colorSquare(){
  if (x >= 250 && x <= 350 && y >= 250 && y <= 350){
    fill(204, 104, 0);
  } else{
    fill(255, 255, 0);
  }
}

//cEllipse function used to create Ellipse shape

function cEllipse(){
  noStroke();
  ellipse(x , y, 10);
}


// pLog function used to log out postional x & y co-ordinace in console.

function pLog (){
  var fps = frameRate();
  console.log("FPS is:" + fps) 
}

// tBoundary function used to set the x axis boundary and transpose the Ellipse

function tBoundary(){
  if (x > xBoundary) {
    x = 0;
    y = y + 15;
  } else {
    x = x + 15;
  }
}



