function setup() {
    createCanvas(400, 300);
    background(240);
   }

   //"Variable Area"
   var x1 = 0
   var y1 = 0
   var x2 = 200
   var x3 = 300
 
   
   function draw() {
    
   line(200, 400, x2, 400);
   ellipse(mouseX, mouseY, 75 , 75); 
   
   rect(x1, x1, x2,300); // Red side
   fill(220, 50, 50); // Red color

   if (mouseIsPressed) {fill(255, 50, 50); // red color ;
    } else {fill(0, 0,255);
    
        ellipse(mouseX, mouseY, 75 , 75); 

   rect(200, x1, 400, x3); // Blue side;
   fill(x1, x1, 255); // Blue color
 
}
   }