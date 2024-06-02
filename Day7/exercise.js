// Case. Sebuah Class untuk Data Student yang ada di Pwd

class Student{
    name = ''
    age = 0
    adress = ''
    program = ''

    constructor(name, age,address, program){
        this.name = name;
        this.age = age;
        this.adress = address;
        this.program = program;
    }
}

const arrDataStudent = [
    new Student('Syifa', 17, 'Kemang', 'Fullstack'),
    new Student('Asep', 18, 'Thamrin', 'UI,UX')
]

console.log(arrDataStudent)