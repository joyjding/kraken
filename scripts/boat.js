Boat = function(x) {
  this.x = x;
  this.y = Game.water.waterLine - (0.2 * Game.water.waterLine);
  this.shape = this.createBoatShape(this.x, this.y);
  this.brain = new RandomBrain(this);
};

Boat.prototype = new Agent();

Boat.prototype.preUpdate = function(event) {
  this.brain.update(event);
};

Boat.prototype.createBoatShape = function(x, y) {
  var boat = new createjs.Shape();
  // Coordinates are the center (0,0)
  boat.x = x;
  boat.y = y;
  // Draw circle from the center
  boat.graphics.beginFill("BurlyWood").drawCircle(0, 0, 50);
  boat.regX = 0;
  boat.regY = 0;
  // Bounds are relative to the center
  boat.setBounds(-50, -50, 50, 50);

  return boat;
}