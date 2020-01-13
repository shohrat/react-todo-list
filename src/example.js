function findProducts(opts = {minPrice: 10, maxPrice: 20}){

console.log(opts);

}
findProducts({});

function max(a,b,...numbers){
    console.log(numbers);
}
max(1,2,3);

const arr1 = [1,2,3];
const arr2 = [1,2,3];

const res = Math.max(41, ...arr1, ...arr2, 10);
console.log(res);

const shallowCopy = [...arr1, ...arr2, 41];
console.log(shallowCopy);

const person = {
    name:{
        first: 'Peter',
        last: 'Smith',
    },
    age: 27,
    role: 'admin'
};

const {name: {first, last}, role } = person;
console.log(first, last);
console.log(role)

//Array destructuring
const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squack',
};

const {duck, ...otherAnimals } = dict;
console.log(otherAnimals)

const fib = [1,1,2,3,5,8,13];
const [a,b,c] = fib;
console.log(a,b,c);

const result = Object.entries(dict)
    .filter(([, value]) =>  value === 'squack')
    .map(([key]) => key);

console.log(result);

/*Прототипы*/

/*
const animal = {
    say: function(){
        console.log(this.name, 'goes', this.voice);
    }
};

Animal.prototype.say = function(){
    console.log(this.name, 'goes', this.voice);
}

function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

const dog = new Animal('Dog', 'woof');
const cat = new Animal('Cat', 'meow');
dog.say();
cat.say();
*/

/*Классы*/

class Animal {
    constructor(name, voice){
        this.name = name;
        this.voice = voice;
    }

    say(){
        console.log(this.name, 'goes', this.voice);
    }
}

// duck -> Bird.prototype ->
// Animal.prototype ->
// Object.prototype -> null
class Bird extends Animal{
    constructor(name, voice, canFly){
        super(name, voice);
        super.say();
        this.canFly = canFly;
    }
    say(){
        console.log('Birds don\'t like to talk');
    }
}

const bird = new Bird('Duck', 'quack', true);
bird.say();