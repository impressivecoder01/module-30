// Module introduction and basic es6 recap
function add(num1=0, num2=0){
    return num1 + num2;
}
console.log(add())

const student = {nam: 'nafis', marks: 100};
const dynamic = `my mark is ${student.marks}`
console.log(dynamic)
const students = [3,3,43,254,6,56,774,4,33,2,]
const a = [...students]
console.log(a)