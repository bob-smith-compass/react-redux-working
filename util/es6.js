// import fetch from 'isomorphic-fetch';
// import 'isomorphic-fetch';
require('isomorphic-fetch');


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
let david = new Employee('David', 12345678);

p.show();
david.show();

/**
 * Promise
 */
const fetchData = (url) => {
    fetch(url)
    .then( res => {
        res.json().then( data => {
            console.log(data);
        })
    })
}

fetchData('https://restcountries.eu/rest/v2/all');