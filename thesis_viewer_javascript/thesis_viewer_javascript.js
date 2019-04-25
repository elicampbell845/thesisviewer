let img;
let windowsize = 800;

function preload() {
  img = loadImage('data/bigthesis.png');
}

let originX = 0;
let originY = 0;

var Xposition = 0; 
var Yposition = 0;

let shiftX = 0; 
let shiftY = 0; 

let scaleFactor = 0.1;

let scaleState = false;
let scaleDir = false;
let cursor = false;


function setup() {

  createCanvas(800,800);
  frameRate(60);
  background(0);
  loadPixels();

}

function draw(){
  
      background(0);
      scaleFactor = constrain(scaleFactor,0.03,3.5);
      
          if (scaleFactor < 1.42){
     Xposition = constrain(Xposition,460,520);
     Yposition = constrain(Yposition,460,520);      
     }    
    
     if (scaleState == true){
   let n = 0.1*scaleFactor;
    
          if (scaleDir == false){
          scaleFactor-=n;
              }
              
          if (scaleDir == true){
          scaleFactor+=n;
              }
    }
  
  shiftX = mouseX - windowsize/2; 
  shiftY = mouseY - windowsize/2; 
    
  scale(scaleFactor);
  translate(shiftX*10, shiftY*10);
  
  Xposition = ((mouseX/scaleFactor-(img.height/2)));
  Yposition = ((mouseY/scaleFactor-(img.width/2)));

    //image(video, Xposition+1080, Yposition+4500);
      image(img, Xposition, Yposition);
      //image(img, 0,0 );
    
}

function mousePressed(){ 
  
    if(mouseIsPressed && (mouseButton == RIGHT)){        
    scaleState = true;
    scaleDir = false;
  }
    
    if(mouseIsPressed && (mouseButton == LEFT)){
    scaleState = true;
    scaleDir = true; 
    }
    
  }

function mouseReleased(){
  


  scaleState = false;

  
    }
