// ========= Class =========

// let counter = {
//   val: 0,
//   increment: function () {
//     this.val += 1;
//   };
// };
//
// function Persona() {
//   this.age = 0;
//
//   const that = this;
//
//   setInterval(function() {
//     that.age++;
//     console.log(that.age);
//   }, 1000);
// };
//
// const p = new Persona();

// ==================================================

class Person {
  constructor(name) {
    this.name = name;
  };

  getName() {
    return this.name;
  };
};

class Employee extends Person {
  constructor(name, title) { // urutan harus diperhatikan
    super(name);
    this.title = title;
  };

  doWork() {
    return this.name + " is working";
  };
};

let scott = new Employee("Scott Moss");
// console.log(scott.getName()); // "Scott Moss"
// console.log(scott.doWork()); // "Scott Moss is working"

// ==================================================

class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  };

  sayName() {
    return 'Hi, I am a ' + this.name + '.';
  };

  getArea() {
    return this.height * this.width;
  };

  setArea(value) {
    return this.height = this.width = Math.sqrt(value);
  };
};

class Square extends Rectangle {
  constructor(length) {
    // Here, it calls the parent class' constructor with length, length
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  };
};

let kotak = new Square(10, 15); // 15 unneccessary, because Square only receive 1 argument
console.log(kotak.height);
console.log(kotak.width);
// console.log(kotak.name);
// console.log(kotak.sayName());
// console.log(kotak.getArea());
// console.log(kotak.setArea(64));
// console.log(kotak.getArea());

// Notes:
// When a normal constructor runs, it creates an empty object and continues with it.
// But when a derived constructor runs, it expects the parent constructor to do the job.
// So if we’re making a constructor of our own, then we must call super,
// because otherwise the object with 'this' reference to it won’t be created. And we’ll get an error.

// super() is called to avoid duplicating the constructor parts between the classes

// ==================================================

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  };

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  };

  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped. Speed = ${this.speed}`);
  };
};

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  };

  // stop() {
  //   this.speed = -10;
  //   console.log(`${this.name} stopped. It's speed become ${this.speed}.`);
  // };

  // stop() {
  //   super.stop(); // call parent stop
  //   this.hide(); // and then hide
  // };
};

let rabbit = new Rabbit("White Rabbit");

// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.hide(); // White Rabbit hides!
// rabbit.stop();

// Notes:
// Usually we don’t want to totally replace a parent method,
// but rather to build on top of it, tweak or extend its functionality.
// We do something in our method, but call the parent method before/after it or in the process.
// Now Rabbit has the stop method that calls the parent super.stop() in the process.

// super.method(...) to call a parent method.
// super(...) to call a parent constructor (inside our constructor only).

// ==================================================
