let Table;
let x = 0;
let y = 0;
let output;
let output2;
let samplecount = 0;
let origin=0;
let ycoord = 200;
let titlestate = 0;
let Countreset = 0;
let arbitrarytime = 0;
let newFont;
let outputnumber;




  function preload() {
    newFont = loadFont('SmoochSans-VariableFont_wght.ttf');
      Table = loadTable ('MeanMoan.csv', 'csv', 'header');
    }
    
  
angleMode(DEGREES);
function mouseClicked () {
  titlestate = 1;
  }
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
     textFont(newFont, 50);
      textAlign(CENTER,CENTER); 

      setInterval(() => { 
        output = -(Table.getString(x, 0));
         x++}, 420/1000);//col1
         setInterval(() => { 
           output2 = (Table.getString(y, 1));
            y++}, 420/1000);//col2
            setInterval(() => { 
              outputnumber = (Table.getString(samplecount, 2));
              samplecount++}, 420/1000);// read third column for numerical value, Note this runs from 1-99961. Isn't working perfectly due to hardware, but close enough.
      
         
      }
      
  



function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}



function draw() {
 
  background(0);
 
    if (titlestate === 0) {
    text ('Synesthetic Composition 0.', 20, 100)
    push()
    textSize(35)
    text ('click to begin', 10, 140)
    pop()
  }
  else if (titlestate === 1) {
    if (Countreset = 0) {
    samplecount = 0;
        Countreset = 1;}
    
  //just manually add title screen and adjust framecount
  if (outputnumber < 10*420) {
    scale(frameCount * 0.1)
  }

  
  if (outputnumber < 25*420) {
  strokeWeight(1.3)
  stroke(255);
  // text (output, 20, 20, 0)
  rotateY(frameCount * 0.01)
  noFill()
  
  push()

    for (rotation = 0; rotation < 300; rotation +=10) {
      push()
      line (0, output2*1.5, 0, 0, output*1.5, 0);
      rotateY(rotation);
      if (outputnumber > 20*420) {
        rotateY(output);
        rotateX(output2);          // torus (output2);
          // rotate(rotation*output2);
        }
   
      line (rotation, output2*1.5, 0, rotation, output*1.5, 0);
     
      if (outputnumber <= 22*420){
      rotateX(rotation * (outputnumber * 0.01))}
      line (0, output2, 0, 0, output, 0);
      pop()
    
      }

  // line (100, output2, 0, 100, output, 0);

  // line (120, output2, 0, 120, output, 0);
  pop()
  rotateY(frameCount * 0.01)
  // linerepeater();


      
}

else if (outputnumber > 25*420 & outputnumber < 81*420) {
  background(0);
  // text(output + 'dB', 10, 20);
  // text(output2+ 'dB', 10, 380);
  // text(frameCount, 20, 40);
  push()
  noStroke()
  ambientLight(120, 120, 245); 


    pop()
  push()
 rotateY(frameCount * 0.01);
 rotateX(frameCount * 0.01);

  for (origin = 0; origin < 200; origin +=10) {
  // while (origin < width) {
  push()
    line(origin, 0, ycoord, 0, output*3, 0);
    line(origin, 0, ycoord, 0, output*3, 0);
    line(origin, 0, ycoord , 0, output*3, 0);
    line(origin, 0, ycoord, 0, output2*3, 0);
    line(-origin, 0, ycoord, 0, output*3, 0);//centre screen left begins here
    line(-origin, 0, ycoord, 0, output*3);
    line(-origin,0, ycoord, 0, output2*3, 0);
    line(-origin, 0, ycoord, 0, output2*3);
    // pop() //this could be written more succintly as a loop
    line(origin, 0, -ycoord, 0, output*3, 0);
    line(origin, 0, -ycoord, 0, output*3, 0);
    line(origin, 0, -ycoord , 0, output*3, 0);
    line(origin, 0, -ycoord, 0, output2*3, 0);
    line(-origin, 0, -ycoord, 0, output*3, 0);//centre screen left begins here
    line(-origin, 0, -ycoord, 0, output*3);
    line(-origin,0, -ycoord, 0, output2*3, 0);
    line(-origin, 0, -ycoord, 0, output2*3);
    pop()
  }
  }
  if (outputnumber > 57*420) {
  push()
  //  rotateY(output * 0.01);
  //  rotateX(frameCount * 0.01);
   noFill();
   stroke(240, 240);
   strokeWeight(0.5)
   push()
    rotate(output)
  sphere(output, floor.output)
  
   pop()
   push()
   rotateX(output2)
   rotateY(output2)
    sphere(output2*2, floor.output2)
   strokeWeight(1)
   push()
   fill(255, 255, 255, 100);
   stroke(0,0,0);
   pop()//sphere in sphere with rotating ellipsoid in accordance with dB.
  

   if (outputnumber > 70*420) {
    scale(2);
    push()
    line (0, output2*1.5, 0, 0, output*1.5, 0);
      rotateY(rotation);
      pop()
  rotate(frameCount*0.01)
  pop();
  push();
  torus(output*2, 50);
  torus(output2, output2);
  if (outputnumber > 75*420) {
    sphere(output*40, 50);}
    pop()
  
    //there's a loose rotate function. FIND IT
  if (outputnumber > 86*420) {
    camera(0, 0, 250);
  }
  
  if (outputnumber > 90*420) {
    rotate(output);
    rotateZ(output2);
  }


  if (outputnumber > 100*420) {//note the real finish is at 99961 (2300*420), but for the sake of this project, artificially cutting the time down, due to hardware issues running code 420 times p/s
    resetMatrix();
    samplecount = 0; // in theory, this shouldn't work. It does though.  
    x = 0;
    y = 0;
    rotation = 0;
    titlestate = 0;
    text ('click to begin', 10, 140)
    Countreset = 0;
    camera(0,0, 800);
  }
   }
    }}}//}

  

