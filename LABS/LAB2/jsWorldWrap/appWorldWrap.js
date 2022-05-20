let xPos = 0; //Circle position
let xNeg= 800;

let xSpeed= 5; //circle speed
let ySpeed= 5;
let boolDecrement= 700;
let boolApparition= 200;


function setup() {
    createCanvas(800, 600); 
}
function draw() {
   background(0,0,255); // blue 
   circle(xPos,200,30); // circle, moving right
   xPos++;
   xPos+= xSpeed   
   xNeg--;
   noStroke()
   circle(xNeg,200,30); // circle, moving
   
   
   if (xPos > 200) {
      fill(255, 255, 255)
   }
   if (xPos > 600){
      noFill()
   }
  
  

 
  
}
   

