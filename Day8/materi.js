// INHERITANCE: Pewarisan Property
class Products{
    constructor(name, price, discount, stock, color){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
        this.color = color;
    }
}

class ProductElectronic extends Products{
    constructor(serialNumber, guarantee, color, name, price, discount, stock){
    super(name, price, discount, stock, color)
        this.serialNumber = serialNumber;
        this.guarantee = guarantee;
    }
}

const inputElectronic = new ProductElectronic('123', '2024', 'Blue', 'A')
console.log(inputElectronic)

class ProductFashion{
    constructor(name, price, discount, stock, size, color, material){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
        this.size = size; 
        this.material = material;
    }
}

class ProductSnack{
    constructor(name, price, discount, stock, flavour, expiry, netto){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.stock = stock;
        this.flavour = flavour;
        this.expiry = expiry; 
        this.netto = netto;
    }
}



// ENCAPSULATION: Membungkus Data kedalam 1 Unit yang bernama Class
// Public Property
// Private Property

class Users{
    username; 
    email;
    #password;
    constructor(username, password){
        this.username = username;
        this.#password = password;
    }

    get showPassword(){
        console.log(this.#password)
    }

    set validateEmail(email){
        if(!email.includes('@')){
            console.log('Email Not Valid!')
        }else{
            this.email = email
        }
    }
}

const userAccount1 = new Users('ryandefryan', 'abc123')
userAccount1.validateEmail = 'ryan@gmail.com'
console.log(userAccount1)
console.log(userAccount1.showPassword())

const programSelected = ['JCWD', 'JCDM', 'JCDS', 'JCUI/UX', 'JCVD']