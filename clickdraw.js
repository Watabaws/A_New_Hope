//retrieve node in DOM via ID
var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");
var clr = document.getElementById("clear");
var tgl = document.getElementById('toggle');

var shape = 0;

var toggleShape = function(e){
  shape = (shape + 1) % 2;
  console.log(shape);
}

tgl.addEventListener("click", toggleShape);

var drawShape = function(e){
  e.preventDefault();
  ctx.beginPath();
  if(shape == 0){
    console.log("Circle!");
    ctx.arc(e.offsetX - 10, e.offsetY - 10, 20, 0, 2 * Math.PI);
    ctx.fill();
  }
  else{
    console.log("Square!");
    ctx.fillRect(e.offsetX - 25 , e.offsetY - 25, 50, 50);
  }
}

c.addEventListener("click", drawShape);

var clear = function(e){
  ctx.clearRect(0,0,600, 600);
}

clr.addEventListener("click", clear);
