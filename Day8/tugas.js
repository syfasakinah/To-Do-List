// case: Program untuk menyimpan data pendaftaran student purwadhika ke 1 unit, validasi data inputnya
// name, username, email (valid), pasword (min: 6, max: 10), address, 
// phoneNumeber (show data: 08123335*****),
// programSelected('JCWD', 'JCDM', 'JCDS', 'JCUI/UX', 'JCVD')

class Student{
    name;
    username; 
    email;
    password;
    address;
    phoneNumber;
    programSelected;
    constructor(name, username, email, password, address, phoneNumber, programSelected){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.programSelected = programSelected;
    }
    
    // ini validasi password min 6 dan max 10
    get password() {
        return this.password;
    }
    set validatePassword(password) {
        if (password.length >= 6 && password.length <= 10) {
            console.log('Password Valid');
        } else {
            console.log('Password is no valid');
        }
    }
    
    // validasi email
    set validateEmail(email){
        if(!email.includes('@')){
            console.log('Email Not Valid!');
        }else{
            this.email = email;
            console.log('Email Valid');
        }
    } 
    
    // validasi program yg di pilih
    set validateProgram(program){
        const programSelected = ['JCWD', 'JCDM', 'JCDS', 'JCUI/UX', 'JCVD'];
        if(programSelected.includes(program)) {
            this.programSelected = programSelected;
            console.log('The selected program is : ', program);
        }else{
            console.log('The selected program is not valid');
        }
    }
    
    // mask phone number (menyembunyikan angka)
    set maskPhoneNumber(phoneNumber) {
        // let maskedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1***$12");
        let maskedNumber = phoneNumber.substring(0, 6) + "*****";
        console.log("Show number : ", maskedNumber);
    }
}
// data input
const nameVal = 'syfa';
const usernameVal = 'syfasakinah';
const emailVal = 'syfawardahsakinah@gmail.com';
const passwordVal = 'syifa123';
const addressVal = 'Tebet Dalam';
const phoneNumberVal = '087875086466';
const programSelectedVal = 'JCWD';
const Student1 = new Student(nameVal, usernameVal, emailVal , passwordVal, addressVal, phoneNumberVal, programSelectedVal);

// menampilkan data input
console.log('Data input : ', Student1);

// menampilkan hasil validasi email
Student1.validateEmail = emailVal;

// menampilkan hasil validasi password min 6 sama max 10 inputan
Student1.validatePassword = passwordVal;

// menampilkan hasil validasi program
Student1.validateProgram = programSelectedVal;

// menampilkan hasil mask phone number
Student1.maskPhoneNumber = phoneNumberVal;


// jawaban benar dari mas Defryan
class StudentRegistration{
    name;
    username;
    email;
    #password;
    address;
    #phoneNumber;
    programSelected;

    constructor(name, username, address, phoneNumber){
        this.name = name;
        this.username = username; 
        this.address = address;
        this.#phoneNumber = phoneNumber; 
    }

    set validateEmail(email){
        if(email.includes('@') && email.includes('.')){
            this.email = email
        }else{
            console.log('Email Not Valid');
        }
    }
    set validatePassword(password){
        if(password.length < 6 || password.length > 10){
            console.log('Password Have Minimum Require')
        }else{
            this.#password = password
        }
    }
    set validateProgramSelected(program){
        const validPrograms = ['JCWD', 'JCDS', 'JCUI/UX', 'JCDM', 'JCVD']

        if(validPrograms.includes(program.toUpperCase())){
            this.programSelected = program.toUpperCase()
        }else{
            console.log('Program Not Found!')
        }
    }

    get showPhoneNumber(){
        console.log(this.#phoneNumber.slice(0, this.#phoneNumber.length-6) + '*****')
    }
}

const student1 = new StudentRegistration('Ryan', 'ryan01', 'Bogor', '0888')
student1.validateEmail = 'ryan@gmail.com'
student1.validatePassword = 'abc12345'
student1.validateProgramSelected = 'abcd'
student1.showPhoneNumber
console.log(student1)