// (optional) encapsulation and this keyword
class Vehicle{
    constructor(type){
        this.type = type
    }
    getThis(){
        console.log(this)
    }
}
const car1 = new Vehicle('car')
car1.getThis()