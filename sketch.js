var student,monster
var gameState="a"

function preload(){
  studentImg=loadImage("Images/Student.png")
  monsterImg=loadImage("Images/Strong monster.jpg")

}

function setup(){
  createCanvas(1200,400)
  student=createSprite(30,50,20,20)
  student.addImage(studentImg)
  student.scale=0.25
  monster=createSprite(600,200,20,20)
  monster.addImage(monsterImg)
  monster.scale=0.25
}

function draw(){
  background(250)
  if(gameState==="a"){
    text("")
  }
  if(gameState==="b"){
    student=createSprite(20,20,20,20)
  }
  if(keyDown("UP_ARROW")){
    student.y=student.y-2
  }
  if(keyDown("LEFT_ARROW")){
    student.x=student.x-2
  }
  if(keyDown("RIGHT_ARROW")){
    student.x=student.x+2
  }    
  if(keyDown("DOWN_ARROW")){
    student.y=student.y+2
  }
  drawSprites()
}