var MAX_FISH = 20;

var SeaManager = function() {
  this.agents = [];
  this.addKraken();
  this.fishes = [];
  this.nextFishAdded = 0;
  var that = this;
  _(5).times(function(n) {
    that.addFish(50 + 50 * n, 50 + 50 * n);
  });
};

SeaManager.prototype.randomlyAddFish = function() {
  var time = createjs.Ticker.getTime(); 
  if (this.nextFishAdded < time && this.fishes.length < MAX_FISH) {
    this.nextFishAdded = time + 
      _.sample([500, 2000, 5000]);
    this.addFish(100, 100);
  }
};

SeaManager.prototype.checkCollisions = function() {
  var that = this;
  for (var i = 0; i < this.fishes.length - 1; i++) {
    for (var j = i + 1; j < this.fishes.length; j++) {
      if (this.fishes[i].getCollision(this.fishes[j]) {
        this.fishes[i].disappearForNSeconds(2);
      }
    }
  }
}

SeaManager.prototype.addKraken = function() {
  this.kraken = new Kraken();
  this.agents.push(this.kraken);
  Game.currentStage.addChild(this.kraken.shape);
};

SeaManager.prototype.addFish = function(x, y) {
  var fish = new SwimmyFish(x, y);
  this.fishes.push(fish);
  this.agents.push(fish);
  Game.currentStage.addChild(fish.shape);
};
