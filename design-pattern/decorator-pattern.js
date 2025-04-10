/**
 * Using the decorator design pattern is fairly simple.
 * You can have a base class with methods and properties that present when you make a new object with the class
 * Now say you have some instances of the class that need method or properties that didn't come from the base class.
 * 
 * You can add those extra methods and properties to the base class,
 * but that could mess up your other instances.You could event make sub-classes to hold specific fmethods and properties you need that you can't put in your base class
 * Either of those approaches will solve your problem,  but they are clunky and inefficient.
 * ----> That's where the decorator parrtern steps in.
 * So if you need to add a new property that holds the price for an object, your can use the decorator pattern to add it directly to that praticular object instance and
 * it won't affect any other instances of that class object. 
 * 
 * 
 * Use Case: Have you ever ordered food onlien. Then you've probably encountered 
 * the decorator pattern. If you'rre getting a sandwich and you want to add special topping, the website isn't adding those topping to everty instance of sandwich 
 * that current users are trying to order.
 */

class Customer {
  constructor (balance = 20) {
    this.balance = balance;
    this.foodItems = [];
  }

  buy(food) {
    if (food.price < this.balance) {
      console.log('you should get it');
      this.balance = this.balance - food.price;
      this.foodItems.push(food);
    } else {
      console.log('maybe you should get something else');
    }
  }
}
module.exports = Customer;

// Another Sandwich class;

class Sandwich {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }

  order() {
    console.log(`You ordered a ${this.type}`)
  }
}

class DeluxeSandwich {
  constructor(baseSandwich) {
    this.type = `Deluxe ${baseSandwich.type}`;
    this.price = baseSandwich.price + 1.75;
  }
}

class ExquisiteSandwich {
  constructor(baseSandwich) {
    this.type = `Exquisite ${baseSandwich.type}`;
    this.price = baseSandwich + 10.75;

  }

  order() {
    console.log(`You ordered a ${this.type} sandwich. It's got everything you need.`)
  }
}