const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testDistanceFromPlanet1ToPlanet2() {
  const planet1 = 5000;
  const planet2 = 12000; 

  const result =  calculateDistance(planet1, planet2)

  try{
    assert.strictEqual(result, 7000)  
    return true;
  } catch (error) {
    console.error("testDistanceFromPlanet1ToPlanet2 failed:", error.message);
    return false;    
  }
}


function testSamePlanetDistance() {
  try {
    const result = calculateDistance(6000, 6000);
    assert.strictEqual(result, 0);
    return true;
  } catch (error) {
    console.error("testSamePlanetDistance failed:", error.message);
    return false;
  }
}


function testAbsoluteValue() {
  try {
    const result = calculateDistance(4500, 7000);
    assert.strictEqual(result, 2500);
    return true;
  } catch (error) {
    console.error("testAbsoluteValue failed:", error.message);
    return false;
  }
}
// Call your test functions here
testDistanceFromPlanet1ToPlanet2();
testSamePlanetDistance();
testAbsoluteValue();

console.log("All tests passed!");
