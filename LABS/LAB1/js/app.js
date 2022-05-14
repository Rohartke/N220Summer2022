function setup(){
    var red= "#C4A4BB"
    var startX= "200" 

createCanvas(800, 600)


//teeth
fill(red);
rect(90, startX, 300, 100);

//Nose
line(90, 160, 65, 160); // straight line (for A)
line(200, 180, 210, 160)
line(200, 180, 210, 180)
//outer eyes
fill(255, 204, 0)
circle(startX, 100, 60);
fill(255, 204, 0)
circle(300, 100, 60);

//inner eyes
stroke(startX, startX, startX,)
strokeWeight(5)
fill(255, 100, 0)
circle(startX, 100, 15);
fill(255, 100, 0)
circle(310, 100, 15);

//left arrow
strokeWeight(2);
fill(40, 100, 50)
line(100, 125, 155, 100)
line(0, 125, 155, 100)
line(100, 100, 155, 100)

//hair(right to left)
noFill();
colorMode(RGB, 210, 200, 200, 6);

strokeWeight(6);
stroke(255, 0, 10, 0.3);



strokeWeight(7);

ellipse(330, 40, 50, 50);
ellipse(300, 50, 40, 40);
ellipse(310, 40, 50, 50);
ellipse(300, 50, 40, 40);
ellipse(280, 40, 50, 50);
ellipse(260, 50, 40, 40);
ellipse(240, 40, 50, 50);
ellipse(200, 50, 40, 40);
ellipse(180, 40, 50, 50);




}


