// @ts-check

const imgPath: String = 'img/person.png'; //Path to the img as string

// creating a class "motherclass" 
class Person {
  // defining the properties of the class
    name: String;
    age: Number;
    img: String;
    jobTitle: String;

    // constructor asigns the values passed to the properties
    constructor(name:String, age:Number, img:String, jobTitle:String) {
        this.name = name;
        this.age = age;
        this.img = img;
        this.jobTitle = jobTitle;
    }

    // function that creates a card
    greeting() {
        return `
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="${this.name}">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">Hi, my name is ${this.name} and I am ${this.age} years old and I work as ${this.jobTitle}</p>
          <a href="#" class="btn btn-primary">Take a look at ${this.name}</a>
        </div>
      </div>`;
    }
}
// instanciating a Person
var John = new Person('John', 26, imgPath, 'IT-specialist');
// calling the method "greeting" wich is defined in the classlayout
document.getElementById('demo').innerHTML += `${John.greeting()}`

// creating another class that extends Person "childclass"
class Employee extends Person {
  // adding new properties
    jobLocation: String;
    salary: Number;

    constructor(name:String, age:Number, img:String, jobTitle:String, jobLocation: String, salary:Number) {
        // super inherits the asigningprocess from the motherclass...we dont nee to write it again
        super(name, age, img, jobTitle);
        this.jobLocation = jobLocation;
        this.salary = salary;
    }

    greeting() {
        return `
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="${this.name}">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">Hi, my name is ${this.name} and I am ${this.age} years old. I work as ${this.jobTitle} in ${this.jobLocation} and i get paid ${this.salary}€ per month.</p>
          <a href="#" class="btn btn-primary">Take a look at ${this.name}</a>
        </div>
      </div>`;
    }
}
// instanciating an Employee
var lisa = new Employee('Lisa', 27, imgPath, 'Webdeveloper', 'Vienna', 3000);
// calling the method "greeting" wich is defined in the classlayout
document.getElementById('demo').innerHTML += `${lisa.greeting()}`