// membuat mini aplikasi dari function

function calculator (numb1, numb2, operation) {
    switch(operation) {
        case "+":
            console.log('hasil penjumlahan:', numb1 + numb2)
            break;
        case "-":
            console.log('hasil pengurangan:', numb1 - numb2)
            break;
        case "/":
            console.log('hasil pembagian:', numb1 / numb2)
            break;
        case "*":
            console.log('hasil pengkalian:', numb1 * numb2)
            break;
        default:
            console.log('not found')   
         }
}

const HasilPenjumlahan = calculator(1, 4, '+');
const HasilPengurangan = calculator(1, 4, '-');
const HasilPembagian = calculator(1, 4, '/');
const HasilPengkalian = calculator(1, 4, '*');
