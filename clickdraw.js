//retrieve node in DOM via ID
var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");
console.log(ctx);
//Assign the buttons to variables
var clr = document.getElementById("clear");
var tgl = document.getElementById('toggle');

//State variable for shape, will be 0 or 1
var shape = 0;
var oldX = -1, oldY = -1;

//Function to change the state variable to the next humber
var toggleShape = function(e){
  shape = (shape + 1) % 2; //Add 1 and modulo 2, always 1 or 0
  console.log(shape); //Debugging!!
}

//Add the eventlistener to the toggle button!!
tgl.addEventListener("click", toggleShape);


var drawCirc = function(x, y){ 
    ctx.beginPath();
    ctx.arc(x - 5, y - 5, 20, 0, 2 * Math.PI); //Draw an arc at the center of the circle, starting at 0 and spanning 2pi radians: a full circle
    ctx.fill(); // Fill in the arc to draw our circle
    ctx.stroke();
}

var drawRect = function(x, y){
    ctx.fillRect(x - 25 , y - 25, 50, 50); //Fill in a rectangle at our mouse
    ctx.stroke();
}


//Function to draw a shape
var drawShape = function(e){
  e.preventDefault(); //Safty
  var x = e.offsetX;
  var y = e.offsetY;
  if(oldX == -1){
    oldX = x; 
    oldY = y;
  }
  ctx.beginPath(); //Begin a new path
  if(shape == 0){ //0 is circle
    ctx.fillStyle = "#DA70D6"; 
    ctx.strokeStyle = "#ADFF2F"
    ctx.moveTo(oldX, oldY);
    ctx.lineTo(x, y);
    ctx.stroke();
    drawCirc(x, y);
  }
  else{
    ctx.fillStyle = "#9C2A00";
    ctx.strokeStyle = "#4682b4"
    ctx.moveTo(oldX, oldY);
    ctx.lineTo(x, y);
    ctx.stroke();
    drawRect(x, y);
  }
  oldX = x;
  oldY = y;
}

c.addEventListener("click", drawShape); //Add the eventlistener to our context

//Function to clear our canvas
var clear = function(e){
  ctx.clearRect(0,0,600, 600); //Make a rectangle spanning our entire canvas to be cleared
  oldX = -1;
  oldY = -1;
}

//Add an eventlistener to our clear button!!
clr.addEventListener("click", clear);
