// case: Disebuah supermarket, terdapat beberapa product, category
// ada elektronik, fashion, dan snack.
// setiap product category memiliki identitas yang berbeda-beda
//yaitu product name, produk stock, dll
// 1. Jabarkan apa saja identitas yang dimiliki untuk masing2 category
// 2. class berdasarkan product category


const product = [
    { category: 'Elektronik', productName: 'TV', productStock: 20 },
    { category: 'Fashion', productName: 'Dress', productStock: 50},
    { category: 'Snack', productName: 'Coklat', productStock: 40}
]

class Products{
    category = '' 
    productName = '' 
    productStock = 0

    constructor(category, Name, stock){
        this.category = category; 
        this.productName = Name;
        this.productStock = stock; 
    }
}

const product1 = new Products('Elektronik', 'TV', 20)
console.log(product1)

const arrProducts = [
    new Products('Elektronik', 'TV', 20), 
    new Products('Fsshion', 'Dress', 50), 
    new Products('Snack', 'Coklat', 40)
]

console.log('cek ', arrProducts)

// case: Program untuk menyimpan data pendaftaran student purwadhika ke 1 unit, validasi data inputnya
// name, username, email (valid), pasword (min: 6, max: 10), address, 
// phoneNumeber (show data: 08123335*****),
// programSelected('JCWD', 'JCDM', 'JCDS', 'JCUI/UX', 'JCVD')

class Student{
    name;
    username; 
    email;
    #password;
    address;
    phoneNumber;
    programSelected;
    constructor(name, username, email, password, address, phoneNumber, programSelected){
        this.name = name;
        this.username = username;
        this.email = email;
        this.#password = password;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.programSelected = programSelected;
    }
    
    // ini validasi password min 6 dan max 8
    set validatePassword(password) {
        if (password.length >= 6 && password.length <= 8) {
            console.log("Valid password");
        } else {
            console.log("No valid password");
        }
    }

    // ini validasi email
    set validateEmail(email){
        if(!email.includes('@')){
            console.log('Email Not Valid!');
        }else{
            this.email = email;
            console.log('Email Valid');
        }
    } 
    
    // ini validasi program yg di pilih
    set validateProgram(program){
        const programSelected = ['JCWD', 'JCDM', 'JCDS', 'JCUI/UX', 'JCVD'];
        if(programSelected.includes(program)) {
            this.programSelected = programSelected;
            console.log('The selected program is : ', program);
        }else{
            console.log('The selected program is not valid');
        }
    }
    
    // ini mask phone number
    set maskPhoneNumber(phoneNumber) {
        // let maskedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1***$12");
        var maskedNumber = phoneNumber.substring(0, 6) + "**";
        console.log("Show number : ", maskedNumber);
    }
}
// data input
const nameVal = 'syfa';
const usernameVal = 'syfasakinah';
const emailVal = 'syfawardahsakinah@gmail.com';
const passwordVal = 'syfa123';
const addressVal = 'Tebet Dalam';
const phoneNumberVal = '082233445566111234543';
const programSelectedVal = 'JCDS';
const Student1 = new Student(nameVal, usernameVal, emailVal , passwordVal, addressVal, phoneNumberVal, programSelectedVal);

// buat nampilin data inputnya
console.log('Data input : ', Student1);

// buat nampilin hasil validasi email
Student1.validateEmail = emailVal;

// buat nampilin hasil validasi password min 6 sama max 8 inputan
Student1.validatePassword = passwordVal;

// buat nampilin hasil validasi program
Student1.validateProgram = programSelectedVal;

// buat nampilin hasil mask phone number
Student1.maskPhoneNumber = phoneNumberVal;