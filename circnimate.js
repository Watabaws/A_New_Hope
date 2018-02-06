var ID = 0;
var go = true;

var clear = function(){
  ctx.clearRect(0,0,600, 600); //Make a rectangle spanning our entire canvas to be cleared
}

var drawCirc = function(x, y){ 
    clear();

    ctx.beginPath();
    ctx.arc(x - 5, y - 5, 20, 0, 2 * Math.PI); //Draw an arc at the center of the circle, starting at 0 and spanning 2pi radians: a full circle
    ctx.fill(); // Fill in the arc to draw our circle
    ctx.stroke();
    
    ID = window.requestAnimationFrame(drawCirc(x + ID, y));
}

