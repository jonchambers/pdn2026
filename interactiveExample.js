let ellipseX = 200
let ellipseY = 400

function setup(){
  createCanvas(windowWidth, windowHeight) 
  
}
function draw(){
  background(16, 163, 144)
  // if(mouseX > 300 && mouseY > 300){
  //   background(201, 119, 30)
  // }else{
  //   background(16, 163, 144)
  // }
  
  // if(mouseIsPressed == true){
  //    background(random(255), random(255), random(255))
  // }else{
  //   background(16, 163, 144)
  // }
  
  textSize(100)
  fill(0)
  text('🖖🍕', 100, 100)
  
  fill(random(255), random(255), random(255))
  ellipse(mouseX, mouseY, 60, 60)

  if(keyIsPressed == true){
    ellipseX = 300
    ellipseY = 200
  }else{
    ellipseX = 200
    ellipseY = 400
  }
  ellipse(ellipseX, ellipseY, 50, 50)
}





