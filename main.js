canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var rover_X = 10;
var rover_Y = 10;
var nasa_mars_images_array= ["Mars1.jpg","Mars2.jpg","Mars3.jpg","mars.jpg"]; 
random_number= Math.floor(Math.random()*4);

rover_image = "rover.png";
background_image = nasa_mars_images_array[random_number];

function add() {
    background_imgTag = new Image(); //Defining a variable with a new image
    background_imgTag.onload = uploadBackground(); //Setting a function on loading this variable
    background_imgTag.src = background_image; //loading the background

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover();
    rover_imgTag.src = rover_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_X, rover_Y, rover_width, rover_height);

}

window.addEventListener("keydown", my_key_down);

function my_key_down(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }

}

function up() {
    if (rover_Y >= 0) {
        rover_Y = rover_Y - 10;
        console.log("When you press up, X=" + rover_X + ",Y= " + rover_Y);
        uploadBackground();
        uploadRover();
    }

}

function down() {
    if (rover_Y <=500 ) {
        rover_Y = rover_Y +10;
        console.log("When you press down, X=" + rover_X + ",Y= " + rover_Y);
        uploadBackground();
        uploadRover();
    }

}

function left() {
    if (rover_X >= 0) {
        rover_X = rover_X - 10;
        console.log("When you press up, X=" + rover_X + ",Y= " + rover_Y);
        uploadBackground();
        uploadRover();
    }

}

function right() {
    if (rover_X <= 700) {
        rover_X = rover_X +10;
        console.log("When you press down, X=" + rover_X + ",Y= " + rover_Y);
        uploadBackground();
        uploadRover();
    }

}