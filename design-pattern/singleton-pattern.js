/**
 * allow only one single instance
 * it uses a global variable to store that instance
 * that prevents multiple instances from being active at the same time which could cause weird bugs.
 * 
 * 
 * Most of the time, this gets implemented in the constructor.
 * The goal of the singleton is typically TO REGULATE THE GLOBAL STATE
 * An example of a singleton that you probably use all the time is your logger
 */

class FoodLogger {
  constructor () {
    this.foodLog = [];
  }

  log(order) {
    this.foodLog.push(order.foodItem)
  }
}

// this is the singleton
class FoodLoggerSingleTon {
  constructor() {
    if (!FoodLoggerSingleTon.instance) {
      FoodLoggerSingleTon.instance = new FoodLogger();
    }
  }

  getFoodLoggerInstance() {
    return FoodLoggerSingleTon.instance
  }
}

module.exports = FoodLoggerSingleTon