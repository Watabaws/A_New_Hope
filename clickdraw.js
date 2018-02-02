//retrieve node in DOM via ID
var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");

//Assign the buttons to variables
var clr = document.getElementById("clear");
var tgl = document.getElementById('toggle');

//State variable for shape, will be 0 or 1
var shape = 0;

//Function to change the state variable to the next humber
var toggleShape = function(e){
  shape = (shape + 1) % 2; //Add 1 and modulo 2, always 1 or 0
  console.log(shape); //Debugging!!
}

//Add the eventlistener to the toggle button!!
tgl.addEventListener("click", toggleShape);

//Function to draw a shape
var drawShape = function(e){
  e.preventDefault(); //Safty
  ctx.beginPath(); //Begin a new path
  if(shape == 0){ //0 is circle
    console.log("Circle!"); //Debugging!
    ctx.arc(e.offsetX - 5, e.offsetY - 5, 20, 0, 2 * Math.PI); //Draw an ark at the center of the circle, starting at 0 and spanning 2pi radians: a full circle
    ctx.fill(); // Fill in the arc to draw our circle
  }
  else{
    console.log("Square!"); //Debugging!
    ctx.fillRect(e.offsetX - 25 , e.offsetY - 25, 50, 50); //Fill in a rectangle at our mouse
  }
}

c.addEventListener("click", drawShape); //Add the eventlistener to our context

//Function to clear our canvas
var clear = function(e){
  ctx.clearRect(0,0,600, 600); //Make a rectangle spanning our entire canvas to be cleared
}

//Add an eventlistener to our clear button!!
clr.addEventListener("click", clear);
