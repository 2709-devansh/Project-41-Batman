const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var umbrella;
var tImg1, tImg2, tImg3, tImg4;
var drops = [];
var maxDrops;
var thunderGroup;
var man;

function preload(){
    manImg = loadImage("Walking Frame/walking_1.png");
    tImg1 = loadImage("thunderbolt/1.png");
    tImg2 = loadImage("thunderbolt/2.png");
    tImg3 = loadImage("thunderbolt/3.png");
    tImg4 = loadImage("thunderbolt/4.png");
}

function setup(){
    createCanvas(1350,670); 
    engine = Engine.create();
    world = engine.world; 

    umbrella = new Umbrella(200,550,105)

    man = createSprite(200,460)
    man.addImage(manImg);
    man.scale = 0.6;

    ground = new Ground(675, 670, width, 20);

    maxDrops = 100; 

     for(var i = 0; i < maxDrops; i++){
        drops.push(new Drops(random(0,1350), random(0,100), 3));
    }   
    
    Engine.run(engine);
}

function draw(){
    background("black");

    umbrella.display(); 

        for (var j = 0; j < maxDrops; j++) {
            drops[j].display();
            drops[j].update();
        }  
     

    ground.display();

    spawnThunderbolts(); 

    drawSprites();
    Engine.update(engine);
}   

function spawnThunderbolts(){
    if(frameCount % 60 === 0) {
        var thunder = createSprite(random(0,1350), 50, 50, 50);
        var rand = Math.round(random(1,4));
        
        switch(rand){
          case 1: thunder.addImage(tImg1);
                  break;
          case 2: thunder.addImage(tImg2);
                  break;
          case 3: thunder.addImage(tImg3);
                  break;
          case 4: thunder.addImage(tImg4);
                  break;
          default: break;
        }

        thunder.scale = 0.5;
        thunder.lifetime = 20;
    }
}

