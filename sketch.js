var control
let img
var light
var button
let img2
let ltoff
var b1
var b2
var lightoff
var final
let p1l
let p2l
let p1ln
let p2ln
let door
let over
var wp
var trashy1 = 140
var trashy2 = 150
var trashy3 = 160


var ballx1 = 280
var bally1 = 240
var ballx2 = 270
var bally2 = 250
var ballx3 = 250
var bally3 = 239

var ballx4 = 220
var bally4 = 240
var ballx5 = 200
var bally5 = 250
var ballx6 = 190
var bally6 = 239

function preload(){
 img = loadImage('02.jpg')
 img2 = loadImage('03.jpg')
 ltoff = loadImage('lightoff.jpg')
 b1 = loadSound('bell1.wav')
  b2 = loadSound('bell2.wav')
  lightoff = loadSound('glass.wav')
p1l = loadImage('p1l.jpg')
  p2l = loadImage('p2l.jpg')
  p1ln = loadImage('p1ln.jpg')
  p2ln = loadImage('p2ln.jpg')
  door = loadSound('door.wav')
  over = loadSound('finalsound.wav')

 
}


function setup() {
  createCanvas(400, 400);
  control = 1
  light = 1
  final = random(2, 12)
  wp = 0
  
}
            
            
function draw() {
  
  
  
  
  
  
 imageMode(CORNERS);
  if (light == 1) {
  image(img2, 0, 0, 400, 400)
   } else {
     image(ltoff, 0, 0, 400, 400)
   }
  
  if (final < 1){
  if (light == 1){
    if(wp == 2){
    image(p1l, 0, 0, 400, 400)
    control = 3
    } 
    if(wp == 1) {
    image(p2l, 0, 0, 400, 400)
      control = 3
    }
     } else {
   if(wp == 2){
    image(p1ln, 0, 0, 400, 400)
    control = 3
    } 
       if (wp == 1){
    image(p2ln, 0, 0, 400, 400)
      control = 3  
     }
     }
}


  
  
  if (control == 1) {
    strokeWeight(6)
    stroke(247, 65, 18)
    line(90, 250, mouseX, mouseY)
  } else {
    stroke(247, 65, 18)
    line(95, 270, 100, 300)
  }

  if (control == 2) {
    strokeWeight(6)
    stroke(9, 153, 241)
  line(325, 252, mouseX, mouseY)
  } else {
    stroke(9, 153, 241)
  line(325, 252, 300, 290)}
  
fill (255, 0, 0)
  stroke(0)
  ellipse(149, 160, 10)
  
  if (mouseIsPressed) {
    if(dist(mouseX, mouseY, 149, 160) < 10) {
    fill(0, 255, 0)
      ellipse(149, 160, 10)
    }
  }

  if (wp == 1) {
  fill (232, 91, 47)
  noStroke()
  ellipse (ballx1, bally1, 10)
  ballx1 = ballx1 + 7
  bally1 = bally1 + 2
  
  fill (245, 186, 15)
  noStroke()
  ellipse (ballx2, bally2, 7)
  ballx2 = ballx2 + 6
  bally2 = bally2 + 4

  fill (245, 186, 15)
  noStroke()
  ellipse (ballx3, bally3, 5)
   ballx3 = ballx3 + 10
  bally3 = bally3 + 1
  
  if (ballx1 > width*1.5 ) {
    ballx1 = 280
  bally1 = 240}
  if (ballx2 > width*1.5 ) {
    ballx2 = 270
  bally2 = 250}
  if (ballx3 > width*1.5 ) {
    ballx3 = 250
  bally3 = 239}
  }

 if (control == 3) {
  fill(240)
  noStroke()
  rect(149, trashy1, 3, 5)
  trashy1 = trashy1 + 7
  
  fill(240)
  noStroke()
  rect(157, trashy2, 3, 5)
  trashy2 = trashy2 + 9
  
  fill(240)
  noStroke()
  rect(162, trashy3, 2, 4)
  trashy3 = trashy3 + 8
 }
  
  
   if (wp == 2) {
  fill (232, 91, 47)
  noStroke()
  ellipse (ballx4, bally4, 10)
  ballx4 = ballx4 - 7
  bally4 = bally4 + 2
  
  fill (245, 186, 15)
  noStroke()
  ellipse (ballx5, bally5, 7)
  ballx5 = ballx5 - 6
  bally5 = bally5 + 4

  fill (245, 186, 15)
  noStroke()
  ellipse (ballx6, bally6, 5)
   ballx6 = ballx6 - 10
  bally6 = bally6 + 1
  
  if (ballx4 < 0 ) {
    ballx4 = 220
  bally4 = 240}
  if (ballx5 < 0 ) {
    ballx5 = 200
  bally5 = 250}
  if (ballx6 < 0 ) {
    ballx6 = 190
  bally6 = 239}
  }





} //DONT TOUCH

function mousePressed() {
  if(dist(mouseX, mouseY, 149, 160) < 10) {
   if (control < 3) {
    b1.play()
  }
  }
  if(dist(mouseX, mouseY, 320, 100) < 15){
    
  if (light == 1){
       if (control < 3){
    lightoff.play()
    if (control > 1) {
    control = 1;
  } else {
    control = 2;
  }
  

    light = 2}
  }
  }
}

function mouseReleased(){
 if(dist(mouseX, mouseY, 149, 160) < 10){
   if (control < 3) {
   b2.play()
  if (control == 2) {
    control = 1;
  } else {
    control = 2;
  }
   } 
final = final - 1
   }
   if (final < 1) {
     if (control == 1) {
     wp = 1} 
     if (control == 2) {
     wp = 2}
     if (control < 3) {
door.play()
over.play()}
}
}

