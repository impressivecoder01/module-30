// access value,nested object, optional chaining, dot notation vs bracket notation
const student = {
    nam: 'rafin',
    marks: 87,
    1: 50,
    'home-address' : 'kolabagan',
    family: {
        address: 'mirpur-10',
        members: 10,
        // mother:{
        //     nam: 'a-b',
        //     age: 100,
        //     'birth-date': 1950
        // }
    }
}
const studentName = student.nam;
console.log(studentName)


const studentNumber = student[1]
console.log(studentNumber)

const studentAddress = student['home-address']
console.log(studentAddress)

for(const key in student){
    console.log(student[key])
}

console.log(student.family.address)
console.log(student.family.mother?.age)
console.log(student.family.mother?.['birth-date'])

// optional chain
// console.log(student.family.mother?.age)
