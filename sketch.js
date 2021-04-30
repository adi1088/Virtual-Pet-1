var  dog,dogImg, happyDog;
var foodS, foodStock;
var database;


function preload(){
  
  dog = loadImage("images/dogImg.png")	
  happyDog= loadImage("images/dogImg1.png")

 }

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,10,10)
  dog.addImage("dog", dog)
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)


  
}


function draw() {  
  background(rgb(46,139, 87))


  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage("happydog", happyDog)

  }

  drawSprites();
  //add styles here
Text("NOTE : Press UP_ARROW Key To Feed The Dog Milk",200,50)
}


function readStock(data){
   foodS=data.val();
}

function writeStock(x){

  if(x<=0){
   x=0;
  }else{
x=x-1;
  }

  database.ref('/').update({
    Food:x
  })  
}

