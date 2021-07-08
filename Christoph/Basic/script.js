// ts-check
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var imgPath = 'img/person.png';
var Person = /** @class */ (function () {
    function Person(name, age, img, jobTitle) {
        this.name = name;
        this.age = age;
        this.img = img;
        this.jobTitle = jobTitle;
    }
    Person.prototype.greeting = function () {
        return "\n        <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.name + "</h5>\n          <p class=\"card-text\">Hi, my name is " + this.name + " and I am " + this.age + " years old and I work as " + this.jobTitle + "</p>\n          <a href=\"#\" class=\"btn btn-primary\">Take a look at " + this.name + "</a>\n        </div>\n      </div>";
    };
    return Person;
}());
var John = new Person('John', 26, imgPath, 'IT-specialist');
document.getElementById('demo').innerHTML += "" + John.greeting();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, img, jobTitle, jobLocation, salary) {
        var _this = _super.call(this, name, age, img, jobTitle) || this;
        _this.jobLocation = jobLocation;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.greeting = function () {
        return "\n        <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.name + "</h5>\n          <p class=\"card-text\">Hi, my name is " + this.name + " and I am " + this.age + " years old. I work as " + this.jobTitle + " in " + this.jobLocation + " and i get paid " + this.salary + "\u20AC per month.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Take a look at " + this.name + "</a>\n        </div>\n      </div>";
    };
    return Employee;
}(Person));
var lisa = new Employee('Lisa', 27, imgPath, 'Webdeveloper', 'Vienna', 3000);
document.getElementById('demo').innerHTML += "" + lisa.greeting();
