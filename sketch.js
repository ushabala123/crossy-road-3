var grid = 50;
var width = 683;
var carGroup1, logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, carAnimation2, logAnimation, logAnimation2, playerAnimation, cityAnimation, cityAnimation2, wallAnimation;
var school;
function preload() {
  carAnimation = loadAnimation("images/car1.png")
  carAnimation2 = loadAnimation("images/car2.png")
  logAnimation = loadAnimation("images/log1.png")
  logAnimation2 = loadAnimation("images/log2.png")
  cityAnimation = loadAnimation("images/city1.png")
  cityAnimation2 = loadAnimation("images/city2.png")
  playerAnimation = loadAnimation("images/player-03.png")
  wallAnimation = loadAnimation("images/wall.png")
}

function setup() {
  createCanvas(700, 700);
  carGroup1 = new Group();
  logGroup1 = new Group();

  for (var i = 0; i < 6; i++) {
    var bottomGrass1 = createSprite(350, height - 50 - (i * 400), width, grassHeight)
    if (i % 2 == 0) {
      var road = createSprite(350, height - 150 - (i * 400) - grassHeight, width, 300)
      road.shapeColor = "black"

    }
    bottomGrass1.shapeColor = "green"
  }

  for (i = 0; i < 40; i++) {
    logs = new Log(2)
    logGroup1.add(logs.spt)
  }

  for (i = 0; i < 40; i++) {
    cars = new Car(2)
    carGroup1.add(cars.spt)
  }
  player = new Player(width / 2, height - 25);
}
function keyPressed() {
  if (keyCode == UP_ARROW) {
    player.move(0, -2);
  }
  else if (keyCode == DOWN_ARROW) {
    player.move(0, 2);
  }
  else if (keyCode == LEFT_ARROW) {
    player.move(-2, 0);
  }
  else if (keyCode == RIGHT_ARROW) {
    player.move(2, 0)
  }
}
function draw() {
  background("skyblue");


  translate(0, -player.spt.y + height - 150);
  for (i = 0; i < logGroup1.length; i++) {
    if (logGroup1[i].x < 0) {
      logGroup1[i].x = width
    }
  }
  for (i = 0; i < carGroup1.length; i++) {
    if (carGroup1[i].x < 0) {
      carGroup1[i].x = width
    }
  }
  if (carGroup1.isTouching(player.spt)) {
    player.spt.x = width / 2
    player.spt.x = height - 75
  }
  drawSprites();
}

