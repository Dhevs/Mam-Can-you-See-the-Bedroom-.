img = "";
status="";

function preload(){
  img = loadImage('download (2).jpg');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectidentifier=ml5.objectDetector("cocossd",modaloaded);
  document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function modaloaded(){
    console.log("modal is loaded");
    status=true;
    objectidentifier.detect(img,getresult);
}

function getresult(error,results){
if(error){console.log(error);}
console.log(results);
}

function draw() {
  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("Bed", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 550, 350 );

  
  
}

