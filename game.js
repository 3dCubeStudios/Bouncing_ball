var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  gravity: {
    x: 10,
    y: 10,
    debug: false,
  },
  physics: {
    default: "arcade",
  },
  backgroundColor: 0x27ae60,
};
var game = new Phaser.Game(config);

var GameScene1 = new Phaser.Class({

  initialize: function GameScene() {
    var ball;
    Phaser.Scene.call(this, { key: "GameScene1" });
  },
  preload: function () {
    this.load.image("ball", "assets/ball.png");
    this.load.image("background", "assets/background.png");
  },
  create: function (){
    this.add.image(500, 500, "background");
    ball1 = this.physics.add.image(100, 0, "ball");
    ball1.setScale(1); // to change size of the image 1 is original
    ball1.body.velocity.setTo(200, 200); // velocity direction initial
    ball1.body.collideWorldBounds = true;
    ball1.body.bounce.set(1);
  },
  update: function(){

  },
});