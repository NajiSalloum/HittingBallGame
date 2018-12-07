
const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

//laod images
const ground = new Image();
ground.src = "img/ground1.jpg";
const foodImg = new Image();
foodImg.src="img/food3.png";


// Load audio files 
const eat = new Audio();
eat.src = "audio/eat.mp3"

//create the snake
let snake = [];
snake[0] = {
	x : 9 * box,
	y : 10 * box
}


//create the food
let food = {
	x : Math.floor(Math.random()*17+1)*box,
	y : Math.floor(Math.random()*15+3)*box
}

//create the score var
let score = 0;

//create copyright
let copyright ='Copyright, Naji Salloum 2018';

//control the snake
document.addEventListener("keydown", direction);

let d;

function direction(event){
	if(event.keyCode == 37 && d != "RIGHT"){
		d = "LEFT";

	}
	else if(event.keyCode == 38 && d != "DOWN"){
		d = "UP";
	}
	else if(event.keyCode == 39 && d != "LEFT"){
		d = "RIGHT";
	}
	else if(event.keyCode == 40 && d != "UP"){
		d = "DOWN";
	}

	
}

// check collision function
function collision(head, array){
	for(let i=0; i < array.length; i++){
		if(head.x == array[i].x && head.y == array[i].y ){
			return true;
		}
	}
	return false;
}

//draw everything to the canvas
function draw(){
	
	
		
	ctx.drawImage(ground, 0, 0);
	for(let i = 0; i < snake.length; i++){
		ctx.fillStyle = ( i == 0)? "blue" : "white";
		ctx.fillRect(snake[i].x, snake[i].y, box, box )? "blue" : "white";
		ctx.strokeStyle="red";
		ctx.strokeRect(snake[i].x, snake[i].y, box, box);
		
	}
	ctx.drawImage(foodImg, food.x , food.y);
	
	//old head position
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	
	//which direction
	if(d == "LEFT") snakeX -= box;
	if(d == "UP") snakeY -= box;
	if(d == "RIGHT") snakeX += box;
	if(d == "DOWN") snakeY += box;
	
	//if the snake eats the food
	if(snakeX == food.x && snakeY == food.y)
	{
		eat.play();
		score++;
		food = {
			x : Math.floor(Math.random()*17+1)*box,
			y : Math.floor(Math.random()*15+3)*box
		}
		//we don't remove the tail
	}
	else
	{
		//remove the tail
		snake.pop();

	}
	//add new Head
	let newHead = {
		x : snakeX,
		y : snakeY
	}
	
	//game over
	if(snakeX < 0 || snakeX > 18 * box || snakeY <  0 || snakeY > 18 * box || collision(newHead, snake))
	{
		clearInterval(game);
	}
		
	
	snake.unshift(newHead);
	ctx.fillStyle = "white";
	ctx.font = "45px Change one";
	ctx.fillText(score, 2*box, 1.6*box);
	
	
	ctx.fillStyle = "white";
	ctx.font = "14px Change one";
	ctx.fillText(copyright, 13*box, 18.5*box);
}

// call draw function every 100 ms
let game = setInterval(draw,100);


