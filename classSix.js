// (optional) introduction to class and objects
const player = {

}

/**
 * class --> template
 * properties
 * method (a special type of function without a function key word)
 */

class Player {
    constructor(n,age){
        this.location = 'bd'
        this.age = age;
        console.log('calling', n)
    }
    goal(){
        console.log('score a goal')
    }
    eating(){
        console.log('meat')
    }
}
const player1 = new Player('tom', 33)
console.log(player1)
player1.eating()
// player1.goal()
// console.log(player1)