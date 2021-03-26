//Create variables here
var dogImg,happyDog,foodS,foodStock,db;
var dog,dogSound;

function preload()
{
	//load images here
  happyDog=loadImage("happyDog.png");
  dogImg=loadImage("Dog.png");
  dogSound=loadSound("dogsound.mp3");
}

function setup() {
	createCanvas(800, 700);

  dog=createSprite(400,350,10,10);
  dog.addImage(dogImg);
  dog.scale=0.3;

  db= firebase.database();
 
  db.ref('Food').on("value",(data)=>{
    foodS= data.val();
  });


  //now < 1619202600000
  //"now < 1619202600000
}


function draw() {  

  background(46,139,86);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    dogSound.play();
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg);
  }

  drawSprites();
  //add styles here

  textSize(20);
  fill("white");
  text("Note: Press 'UP' Arrow Key To feed milk to Drago",width/2-200,50);
  text("Food Remaining="+foodS,width/2+50,height/2-50);

}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  db.ref('/').update({
    Food:x
  })
}



