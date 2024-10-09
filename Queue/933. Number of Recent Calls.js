
var RecentCounter = function() {
  this.start = 0
  this.end = 0
  this.records = []
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  while (this.start < this.end && (t - this.records[this.start] > 3000)) {
      this.start++
  }
  this.records[this.end++] = t
  return this.end - this.start
};

/** 
* Your RecentCounter object will be instantiated and called as such:
* var obj = new RecentCounter()
* var param_1 = obj.ping(t)
*/

var RecentCounter = function() {
  this.queue = []
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  this.queue.push(t) // just push the time
  let range = t - 3000
  // range < element i queue < t => range
  while (this.queue[0] < range) { // remove the element that is out of range
    this.item.shift()
  }
  return this.queue.length
};