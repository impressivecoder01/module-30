// (optional)inheritance prototypical inheritance
class Dog{
    constructor(n, bread,age){
        this.name = n;
        this.bread = bread
        this.age = age
    }
    eat(){
        console.log(`${this.n} is eating`)
    }
    bark(){
        console.log(`${this.bread} is barking`)
    }
}
const dog1 = new Dog('tiger','Deshi')
console.log(dog1)
dog1.bark()
class Animal {
    constructor(n, age){
        this.n= n
        this.age = age
    }
}
class Cat extends Animal {
    constructor(n,color,ag,ate){
    //    super(n,age)
        this.color = color
        
        this.ate = ate
    }
    eat(){
        console.log(`${this.n} is eating ${this.ate}`)
    }
    

}
const cat1 = new Cat('baggira', 'black', 5 , 'fish')
console.log(cat1)
// cat1.eat()
cat1.eat()
// cat1.age()