//array map to do one-line loop
const numbers = [3,4,5,6,3];
const double =[]
for(const number of numbers){
    const doubled = number *2;
    double.push(doubled)
}
console.log(double)

const doubleIt = x => x*2
const doubled = numbers.map(doubleIt)
console.log(doubled)

const doubled2 = numbers.map(x => x*2)
console.log(doubled2)

const friends = ['zaved', 'pavel', 'zavel', 'kamal'];
const nameLength = friends.map(nam =>nam.length)
console.log(nameLength)
const firstLetter = friends.map(nam => nam[0])
console.log(firstLetter)
const firstLetter3 = friends.map(nam => nam[0].toUpperCase())
console.log(firstLetter3)
const result = numbers.map((num, index) => {
    // console.log(num*index)
    return num* index
})
console.log(result)