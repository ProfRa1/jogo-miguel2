var angle
var score =0;

var life =3;
var score=0;
var gameState=1

function preload(){

  zom3 = loadImage("zombie 3.png")
  protaImg = loadImage("protagonista.png")
  zom2Img = loadImage("zom 3.png")
  cenarioImg = loadImage("cenario.jpg")
  balaImg = loadImage("bullet1.png")
  
}

function setup() {

  createCanvas(900, 600);
  prota= createSprite(10,500)

  prota.addImage(protaImg)
  prota.scale=0.4
  angleMode(DEGREES)
  angle=15

}

function spawzumbie(){
  if(frameCount%300===0){
    zumbie= createSprite(950,550)
    zumbie.addImage(zom3)
    zumbie.velocityX=-10
    zumbie.lifetime=90
    zumbie.scale=0.4

  }
    if(frameCount%420===0){
      zumbie2= createSprite(950,500)
      zumbie2.addImage(zom2Img)
      zumbie2.velocityX=-7
      zumbie2.lifetime=900/7
      zumbie2.scale=0.3

    }
}

function draw() {

  background("#BDA297");
  image(cenarioImg,0,0,900,600)

  drawSprites();
  spawzumbie()
 
  if(keyIsDown(RIGHT_ARROW)&& prota.y >10){
    prota.rotation = prota.rotation+3
  }
  if(keyIsDown(LEFT_ARROW) && prota.x <200){
    prota.rotation = prota.rotation-3
  }
  fill("green")
  textSize(20)
  text("Pontuação: ", 50,50);
  text("Nome do Jogo", 400,50);
  text("Vidas: ", 750,50);
}



function shootBullet(){

  bullet= createSprite(150, width/2, 50,20);
  bullet.y= gun.y-20;
  bullet.addImage(bulletImg);
  bullet.scale=0.12;
  bullet.velocityX= 7;
  bulletGroup.add(bullet);

}


function handleGameover(bubbleGroup){
  
    life=life-1;
    bubbleGroup.destroyEach();
    

    if (life === 0) {
      gameState=2;
      
      swal({
        title: `Fim de Jogo`,
        text: "Oops você perdeu o jogo!",
        text: "Sua pontuação é: " + score,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Obrigado por jogar"
      });
    }
 
}