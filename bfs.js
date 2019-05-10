var cities = [];
var totalCities = 8;
var recordDistance;
var bestboy;

function setup() {
  createCanvas(800, 500);
  for(var i = 0; i < totalCities; i++){
    var v = createVector(random(width), random(height));
    cities[i] = v;

  }
  var d = calcDistance(cities);
  recordDistance = d;
  bestboy = cities.slice();
}
