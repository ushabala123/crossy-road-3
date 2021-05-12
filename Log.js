class Log{
    constructor(speed){
        this.x = random([100,300,500,700,900,1100,1300,1500]);
        this.y = height-random([550,650,750,1350,1450,1550,1650,1750]);
        this.width = 1500;
        this.height = 800;
        this.spt = createSprite(this.x,this.y,this.width,this.height);
        this.spt.shapeColor = "brown";
        this.spt.scale=0.05
        this.spt.addAnimation("log",logAnimation)
        
        this.speed = speed;
        this.spt.velocityX = this.speed;

    }

   
}