// foreach, filter, find, and different between them
const numbers = [1,3,4,5,6,7,8,9,1];
numbers.forEach(num =>{
    const double = num *5;
    console.log(double)
})


const greaterThanFour = numbers.filter(x => x>4);
console.log(greaterThanFour)
const lowerThanFour = numbers.find(x => x< 4)
console.log(lowerThanFour)
const dividedByTwo = numbers.find(x => x%2===0)
console.log(dividedByTwo)

// const student = [
//     {
//         id:1, name:'abul', marks : 40,
//         id:2, name:'abul1', marks : 400,
//         id:3, name:'abul2', marks : 4000,
//         id:4, name:'abul3', marks : 490,
//     }
// ]
// const names = student.map(student => student.marks)
// console.log(names)