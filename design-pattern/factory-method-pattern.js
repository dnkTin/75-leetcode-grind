/**
 * The factory method is a creational pattern that deals with Object creation.
 * It helps in encapsulating an object from the code that depend on it.
 * 
 * Imagine having a vehicle plant that produces differnet vehicles and you
 * start by producing sedans but later on you decide to go into the production of truckes,
 * you'll probably have to create a duplicate production system for the trucks, now let's imagine you add SUVs and minivans to the mix. At this point, the production system become messy and repetitive
 * 
 * 
 * In a factory pattern, we can abstract the common behavior among the vehicles like
 * how th evehicle is made, into a separate interface object called Vehicle
 * and then allow the different implementations to implement this common behavior in their unique ways.
 * 
 * 
 * In frontend, a factory method pattern allow us to abstract common behavior among components, let's imagine a Toast component that has a different behavior on Mobile and Desktop
 * we can use Typescript to create a Toast interfacer that outlines the general behavior of the toast component
 */

interface Toast {
  template: String;
  title: String;
  body: String;
  position: String;
  visible: Boolean;
  hide(): void;
  render(title: String, body: String, duration: number, position: string):string
}

class MobileToast implements Toast {
  title: String;
  body: String;
  duration: Number;
  visible = false;
  position: String;
  template = `
    <div class="mobile-toast">
      <div class="mobile-toast--header">
        <h2>${this.title}</h2>
        <span>${this.duration}</span>
      </div>
      <div class="mobile-toast--body">
        ${this.message}
      </div>
    </div>
  `

  hide() {
    this.visible = flase;
  }

  render(title: String, body: String, duration: Number, position: string) {
    this.title = title;
    this.body = body;
    this.visible = visible;
    this.duration = duration;
    this.position = 'center';
    return this.template;
  }
}

class Desktop implments Toast {
  title: String;
  body: String;
  duration: Number;
  visible = false;
  position: String;
  template = `
    <div class="mobile-toast">
      <div class="desktop-toast--header">
        <h2>${this.title}</h2>
        <span>${this.duration}</span>
      </div>
      <div class="desktop-toast--body">
        ${this.message}
      </div>
    </div>
  `

  hide() {
    this.visible = flase;
  }

  render(title: String, body: String, duration: Number, position: string) {
    this.title = title;
    this.body = body;
    this.visible = visible;
    this.duration = duration;
    this.position = 'center';
    return this.template;
  }
}

class ToastFactory {
  creatToast(type: 'mobile' | 'desktop'): Toast {
    if (type === 'mobile') {
      return new MobileToast()
    } 
    return new DesktopToast();
  }
}

class App {
  toast: Toast;
  factory = new ToastFactory();
  render() {
    this.toast = this.factory.creatToast(isMobile() ? 'mobile': 'desktop');
    if (this.toast.visible) {
      this.toast.render('Toast Header', 'Toast Body');
    }
  }
}