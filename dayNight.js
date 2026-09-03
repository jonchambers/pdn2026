let dayBool = false
let nightBool = false

function setup(){
 createCanvas(windowWidth, windowHeight)

}


function draw(){

	if(dayBool == true){
		dayScene()
	}
	if(nightBool == true){
		night()
	}
}


function dayScene(){
	background(52, 168, 235)
	fill(235, 137, 52)
	noStroke()
	ellipse(windowWidth/2, windowHeight/2, 100, 100)

	ellipse(200, 300, 50, 50)
}

function night(){
	background(0)
	fill(171, 240, 245)
	noStroke()
	ellipse(windowWidth/2, windowHeight/2, 100, 100)

}


function keyPressed(){

	if(key === 'd'){
		dayBool = true
		nightBool = false
	}

	if(key === 'n'){
		nightBool = true
		dayBool = false
	}

}