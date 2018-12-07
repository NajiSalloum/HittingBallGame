
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

//laod images
const ground = new Image();
ground.src = "img/background.png";
const ballImg = new Image();
ballImg.src="img/ball.png";
const recImg = new Image();
recImg.src="img/rec.png";




let rec = {
	x : 240,
	y : 585
}


//create the ball
let ball = {
	x : 240,
	y : 0
}



//create copyright
let copyright ='Copyright, Naji Salloum 2018';

//control the rec
document.addEventListener("keydown", direction);

let d ="UP";

function direction(event){
	if(event.keyCode == 37 ){
		d = "LEFT";

	}
	
	else if(event.keyCode == 39 ){
		d = "RIGHT";
	}
	

	
}

// check collision function
function collision(ball, rec){
	if(ball.x == rec.x){
		return true;
	}
			
	return false;
}

function spark(ball, rec){
	if(ball.y == rec.y - 70 && ball.x >= rec.x - 80 && ball.x <= rec.x + 80){
		return true;
	}
			
	return false;
}

//draw everything to the canvas
var initial = "yes";
let isCklicked = "no";
let help = "";
let helpBall = "";
let helpBallDirection = "";
function draw(){
	
	
	if(initial == "yes")
	ball.y+=5;
	ctx.drawImage(ground, 0, 0);

	ctx.drawImage(recImg, rec.x, rec.y);
	
	ctx.drawImage(ballImg, ball.x , ball.y);
	if(d == "LEFT")
		rec.x -= 5;
	if(d == "RIGHT") 
		rec.x  += 5;
	
	if(rec.x == -5 || rec.x == 495 ){
		clearInterval(game);
	}
	
	if(ball.y == rec.y - 70 && ball.x >= rec.x - 80 && ball.x <= rec.x + 80){
	     	isCklicked = "yes";
			initial = "no";
				helpBallDirection = "UP";
			if(d == "LEFT"){
				help="LEFT";
			}
			else if(d == "RIGHT"){
				help = "RIGHT";
			}
			else{
				help = "UP";
			}
			
			
	}
	if(isCklicked == "yes"){
		
		if(help== "LEFT"){
			ball.y-=5;
			ball.x+= Math.floor((rec.x + 10)/100 + 3);
			initial = "no";
			
		}
		if(help == "RIGHT"){
			ball.y-=5;
				ball.x-= Math.floor((rec.x + 10)/100 + 3);
			initial = "no";
			
		}
		if(help == "UP"){
			ball.y-=5;
			
			initial = "no";
			
		}
			
	}
	
	////////////////////////////////////////////////
	if(ball.y <= -10){
		isCklicked = "no";
		helpBall = "DOWN";
		helpBallDirection = "DOWN";
		
	}
	if(ball.x <= -10){
		isCklicked = "no";
		helpBall = "LEFT";
		
	}
	if(ball.x >= 545){
		isCklicked = "no";
		helpBall = "RIGHT";
		
	}
	if(isCklicked == "no"){
		if(helpBall == "DOWN"){
			
			ball.y+=5;
			if(help == "LEFT"){
				ball.x -= 5;
			}
			else{
				ball.x += 5;
			}
		}
		
		if(helpBall == "LEFT"){
			if(helpBallDirection == "DOWN")
				ball.y+=5;
			else
				ball.y-=5;
			ball.x+=5;
		}
		if(helpBall == "RIGHT"){
			if(helpBallDirection == "DOWN")
				ball.y+=5;
			else
				ball.y-=5;
			ball.x-=5;
		}
	}
	
	
}

// call draw function every 100 ms
let game = setInterval(draw,100);


