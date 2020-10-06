// Using the ES6 syntax 
class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greeting() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
    }
}

let person1 = {
    name: 'Rashad',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}
person1.sayHello();

let person2 = {
    name: 'Bob',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}
person2.sayHello();

let person3 = {
    name: 'Beth',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}
person3.sayHello();

let person4 = {
    name: 'Caimen',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}
person4.sayHello();

let person5 = {
    name: 'Connor',
    sayHello: function () { console.log(`Hello! My name is ${this.name}`) }
}
person5.sayHello();

let p1 = new Person('Rashad', 'Birmingham', '27');
p1.greeting();
let p2 = new Person('Bob', 'Tuscaloosa', '30');
p2.greeting();
let p3 = new Person('Beth', 'Vestavia hills', '50');
p3.greeting();
let p4 = new Person('Caimen', 'Gadsden', '27');
p4.greeting();
let p5 = new Person('Connor', 'Lorton', '25');
p5.greeting();

//  Car information using class
class Vehicle {
    constructor(manu, wheels, type, year) {
        this.manu = manu;
        this.wheels = wheels;
        this.type = type;
        this.year= year;
    }
    aboutVehicle() {
        console.log(`${this.manu}, ${this.year} ${this.type}, ${this.wheels} wheels.`)
    }
}

class Truck extends Vehicle {
    constructor(manu, wheels, type, doorNum, truckBed, year,) {
        super(manu, wheels, type);
        this.doorNum = doorNum;
        this.truckBed = truckBed;
        this.year= year;
    }
    aboutVehicle() {
        console.log(`${this.manu} ${this.type}, ${this.year}, ${this.wheels} wheels. ${this.doorNum} doors, Truckbed: ${this.truckBed}`)
    }
}

class Sedan extends Vehicle {
    constructor(manu, wheels, type, doorNum, size, mpg, year,) {
        super(manu, wheels, type);
        this.doorNum = doorNum;
        this.size = size;
        this.mpg = mpg;
        this.year= year;
    }
    aboutVehicle() {
        console.log(`${this.manu} ${this.type},${this.year} ${this.wheels} wheels. ${this.doorNum} doors, ${this.size} size and ${this.mpg} mpg.`)
    }
}

class Motorcycle extends Vehicle {
    constructor(manu, type, wheels, handlebars, doors, year, ) {
        super(manu,wheels, type);
        this.handlebars = handlebars;
        this.doors = doors;
        this.year= year;
    }
    aboutVehicle() {
        console.log(`${this.manu} ${this.type},${this.year} ${this.wheels} wheels. Doors: ${this.doors}, handlebars: ${this.handlebars}`)
    }
}

v1 = new Vehicle('honda', '4', 'accord', '2015')
v1.aboutVehicle();

t1 = new Truck('GMC', '4', 'sierra', '2', 'No', '2018')
t1.aboutVehicle();

s1 = new Sedan('lexus', '4', 'IS', '2', 'Intermediate', '25', '2020')
s1.aboutVehicle();

m1= new Motorcycle('Kawasaki','Ninja','2', 'none', '650', '2020')
m1.aboutVehicle();
