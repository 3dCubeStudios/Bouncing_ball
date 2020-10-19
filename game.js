var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene:{
    preload: preload,
    create: create,
    update: update
  },
  gravity: {
    x: 10,
    y: 10,
    debug: false,
  },
  physics: {
    default: "arcade",
  },
};
var game = new Phaser.Game(config);

  function preload () {
    this.load.image("background", "assets/background.png");
    this.load.image("ball", "assets/ball.png");
  };
  function create(){
    this.add.image(500, 500, "background");
    ball1 = this.physics.add.image(100, 0, "ball");
    ball1.setScale(1); // to change size of the image 1 is original
    ball1.body.velocity.setTo(200, 200); // velocity direction initial
    ball1.body.collideWorldBounds = true;
    ball1.body.bounce.set(1);
  };
  function update(){

  };
