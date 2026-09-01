let eyeballHeight= 100

let furby



async function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
 
  furby = await loadImage('furby.png')
  print(furby)
  imageMode(CENTER)
}

function draw() {
  background(222, 44, 172)
  stroke(120, 40, 200)
  strokeWeight(15)
  line(50, 100, 500, 600)
  point(200, 300)
  //first ellipse style
  
  fill(130, 200, 75)
  stroke(70, 200, 100)
  strokeWeight(5)
  ellipse(300, 300, 100, 100)

  //rect style
  fill(80, 120, 220)
  rect(450, 200, 100, 200)

  fill(230, 200, 80, 200)
  noStroke()
  ellipse(windowWidth/2, windowHeight/2, 50, 50)
  
  noFill()
  stroke(70, 200, 100)
  strokeWeight(20)
  triangle(100, 500, 200, 550, 50, 600)

  if(mouseIsPressed == true){
    eyeballHeight = 75
  }else{
    eyeballHeight = 100
  }
  //eyeballs
  fill(255)
  noStroke()
  ellipse(200, 100, 200, eyeballHeight)

  fill(0)
  ellipse(200, 100, 50, 50)

  //second eyeball
  fill(255)
  noStroke()
  ellipse(420, 100, 200, eyeballHeight)

  fill(0)
  ellipse(420, 100, 50, 50)

  image(furby, windowWidth/2, windowHeight/2, 50, 50)
}


