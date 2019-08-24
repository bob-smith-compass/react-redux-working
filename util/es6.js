let [first, ...others] = [1, 2,3,4,5];

console.log(first, others); // 1 [ 2, 3, 4, 5 ]

class Person {
    
    constructor(name = 'David'){
        this.name = name;
    };
    show() {
        console.log(`Hell Mr. ${this.name}`);
    }
}

class Employee extends Person {
    constructor(name, SSN = 0){
      super(name);
      this.SSN = SSN;
    };
    show() {
        console.log(`Hello Mr. ${this.name}. You'r SSN is ${this.SSN}`);
    }
}
let p = new Person('John');
let david = new Employee(12345678);

p.show();
david.show();