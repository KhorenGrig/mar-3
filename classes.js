// make a class
// make another class that extends the first class
// call the contructor of the first class from the second class
// add a function to the second class
// make an object out of first class
// call a function of the object

class Person{
    constructor(name,last,age){
        this.name = name;
        this.last = last;
        this.age = age;
    }

    obj(){
        console.log("Something");
    }
}

const pp = new Person('Khoren','Grigoryan',21);

pp.obj();

class User extends Person{
    constructor(name,lastname,age,spec){
        super(name,lastname,age);
        this.spec = spec;
    }

    tell(){
        console.log(`Name:${this.name} Lastname:${this.last} Age:${this.age} Spec:${this.spec}`);
    }
}

const uu = new User('John','Doe',23,'Doctor');

uu.tell();