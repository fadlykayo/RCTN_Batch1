class Employee {
  constructor(name) {
    this.name = name;
  };

  doWork() {
    console.log(`${this.name} is working`);
    return `${this.name} is working`;
  };
};

export default Employee;

// export class Person {
//   constructor(name) {
//     this.name = name;
//   };
//
//   getName() {
//     console.log(this.name);
//     return this.name;
//   };
// };
//
// export class Employee extends Person {
//   doWork() {
//     console.log(`${this.name} is working`);
//     return `${this.name} is working`;
//   };
// };
