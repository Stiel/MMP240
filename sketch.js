console.log("contact.js is loaded");

var birds = [];
var bugs = [];
var birdNumber = 20;
var system;
var img;


function setup(){
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('sketch');
    
    img = loadImage("images/skye-object.png"); 
    
    for(var i = 0; i < birdNumber; i++){
        birds.push(new Bird(random(0, window.innerWidth), random(0, window.innerHeight)));
    }
    
    for(var i=0; i < 10; i++){
    bugs.push(new Jitter());
    }
    
    system = new ParticleSystem(createVector(width/2, 50));
    
}


function Bird(x, y){
        this.location = createVector(x,y);
        this.velocity = createVector(0, -2);
        this.acceleration = createVector(3, 3);
        this.r = 0;
        this.maxforce = random(0.005, 0.15);
        this.maxspeed = random(2, 20);
        
        this.update = function(){
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.maxspeed);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
	}
        
        this.seek = function(target){
            var desired = p5.Vector.sub(target, this.location);
            desired.normalize();
            
            var steer = p5.Vector.sub(desired, this.velocity);
            steer.limit(this.maxforce);
            this.acceleration.add(steer);
            
            
        
        }
       this.display = function(){
	   
		image(img, this.location.x, this.location.y, this.r, this.r);
           
	}
}


function Jitter(){

    this.x = random(200, window.innerHeight);
    this.y = random(200, window.innerWidth);
    
    this.radius = random(10, 30);
    this.speed = 1;
    
    this.move = function() {
     this.x += random(-this.speed, this.speed);
     this.y += random(-this.speed, this.speed);
    }
    this.display = function() {
    image(img, this.x, this.y, this.radius, this.radius);
    }
    
}



function draw(){
    clear();
    fill(255, 255, 255, 5);
    rect(0, 0, window.innerWidth, window.innerHeight);
    
    var mousePos = createVector(mouseX, mouseY);
    
    for(var i = birds.length - 1; i >= 0; i--){
        birds[i].seek(mousePos);
		birds[i].update();
		birds[i].display();
    };

    
    fill("rgb(244, 35, 0)");
    
    for(var i=0; i < 100; i++){
    var tempBug = new Jitter();
    bugs.push(tempBug);
    bugs[i].move();
    bugs[i].display();
    }
    
    system.addParticle();
  system.run();
    
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  image(img, this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};




function mouseClicked() {
    bugs.push(new Jitter());
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}





/*var system;
var img;


function setup() {
  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('sketch');
  system = new ParticleSystem(createVector(width/2, 50));
   img = loadImage("images/skye-object.png");    
    
}

function draw() {
  //background(51);
    clear();
  system.addParticle();
  system.run();
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  image(img, this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};*/