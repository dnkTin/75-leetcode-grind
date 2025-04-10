/**
 * MVC pattern
 * The MODEL part is like a subject and the VIEW part is like an observer of that object
 * The subject hold all of the data
 * The observer -> get the data from subject when the data has been updated
 * 
 * THe goal of the observer design pattern is to create this one-to-many relationship
 * between the subject and all of the observers waiting for data 
 * 
 * 
 * Example: sending notification, updating, filters, handling subscribers
 * 
 * Case: you have a single page application that has three feature dropdown lists
 * that are dependent on the selection of a category from a higher level dropwdown
 * This is common on many shopping sites, like Home Depot.
 * You have a bunch of filters on the page that are dependent on the value of a top level filter
 */

class CategoryDropdown {
  constructor() {
    this.categories = ['appliances', 'door', 'tools'];
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }
  onChange(selectedCategory) {
    this.subscribers.forEach(observer => observer.update(selectedCategory))
  }
  
}

class FilterDropdown {
  constructor(filterType) {
    this.filterType = filterType;
    this.items = [];
  }

  update(category) {
    fetch('https://example.com')
    .then(res => this.items(res))
  }
}


const CategoryDropdown = require('./CategoryDropdown');
const FilterDropdown = require('./FilterDropdown');

const categoryDropdown = new CategoryDropdown();

const colorsDropdown = new FilterDropdown('colors');
const priceDropdown = new FilterDropdown('price');
const brandDropdown = new FilterDropdown('brand');

categoryDropdown.subscribe(colorsDropdown);
categoryDropdown.subscribe(priceDropdown);
categoryDropdown.subscribe(brandDropdown);




interface NotificationObserver {
  onMessage(message:Message): string;
}
interface Notify {
  sendMessage(message:Message): any;
}
class Message {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
  getMessage(): string {
    return `${this.message} from publication`;
  }
}

class User implements NotificationObserver {
  element: Element;
  constructor(element: Element) {
    this.element = element;
  }

  onMessage(message: Message) {
    return (
      this.element.innerHTML += `<li>you have a new message - ${message.getMessage()}</li>`
    )
  }

}


class MailingList implements Notify {
  protected observers: User[]  = [];
  notify(message: Message) {
    this.observers.forEach((observer) => {
      observer.onMessage(message);
    })
  }

  subscribe(observer: User) {
    this.observers.push(observer);
  }

  unsubscribe(observer: User) {
    this.observers = this.observers.filter((subscriber) => subscriber !== observer)
  }
  
  sendMessage(message: Message) {
    this.notify(message);
  }
}

const messageInput: Element = document.querySelector('.message-input');
const user1: Element = document.querySelector('.user1-messsages');
const user2: Element = document.querySelector('.user2-messsages');

const u1 = new User(user1);
const u2 = new User(user2);

const subscribeU1: Element = document.querySelector('.user1-subscribe')
const subscribeU2: Element = document.querySelector('.user2-subscribe')


const unSubscribeU1: Element = document.querySelector('.user1-unsubscribe')
const unSubscribeU2: Element = document.querySelector('.user2-unsubscribe')

const sendBtn: Element = document.querySelector('.send-btn');

const mailingList = new MailingList();

mailingList.subscribe(u1);
mailingList.subscribe(u2);

subscribeU1.addEventListener('click', () => {
  mailingList.subscribe(u1);
})

subscribeU2.addEventListener('click', () => {
  mailingList.subscribe(u2);
})

unSubscribeU1.addEventListener('click', () => {
  mailingList.unsubscribe(u1);
})

unSubscribeU2.addEventListener('click', () => {
  mailingList.subscribe(u2);
})

sendBtn.addEventListener('click', () => {
  mailingList.sendMessage(new Message(messageInput.value));
})

