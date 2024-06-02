// IF SWTATEMENT =============================

const age = 10;
if (age >= 17) {
    console.log("ini di dalam if statement");
}

// ELSE STAETMENT ============================
// backip plan dari if statement
// const age = 10;

if (age == 17) {
    console.log("ini di dalam if statement");
 } else {
    console.log("ini di dalam else statement")
 }

// ELSE IF STATEMENT ==========================

const grade = "B";

 if (grade === "A") {
    console.log("Nilai Bagus");
 } else if (grade === "B") {
    console.log("Nilai Luamayan");
 } else if (grade === "C") {
    console.log("Nilai Buruk");
 } else if (grade === "D") {
    console.log("Nilai Sangat Buruk");
 } else {
    console.log("Nilai yang dimasukkan salah");
 }

// SWITCH CASE
const day = "Senin".toLowerCase();

switch (day) {
   case "senin":
       console.log("hari senin");
      break;
    
    case "selasa":
        console.log("hari selasa");
        break;

    case "rabu":
        console.log("hari rabu");
        break;

    default:
        console.log("hari tidak iditemukan");
        break;
}

// LOGICAL OPERATOR: &&, ||, ! ==================
// OR || : jika salah satu saja ada yang nilainya true => true

const car = "MERCY";
if (car === "BMW" || car === "MERCY") {
    console.log("mobil german");
} else {
    console.log("mobil jepang");
}

// AND &&: wajib seluruh kondisi yang ada itu harus true =>true
const umur = 12;
const punyaSIM = true;

if (umur >= 18 && punyaSIM === true) {
    console.log("boleh bawa kendaraan");
} else {
    console.log("belum boleh bawa kendaraan");
}

// NOT ! : membalikan sebuah nilai boolean

const isSunny = true;

console.log(!isSunny);

const user = "Joko";

if (!user) {
    console.log("user gak ada");
} else {
    console.log("user ada");
}

// ==================================================
// TERNATY OPERATOR : shortcut dari if else statement

const str = "javascript";

if (str === "javascript") {
    console.log("javascript");
}

// // rumus +>>>> kondisi ? "true" : "false"

console.log(
    str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "Typescript"
    : "Not Javascript or Typescript"
);

// LOOP STATEMENT ==================================
// Type Loop : for loop, while loop, do while loop
// case: 



// FOR LOOP : mempunyai 3 statement
// statement 1: menginisialisasi var dari looping itu sendiri
// statement 2: mendefine kondisi dari looping tersebut
// statement 3: kode yang dieksekusi di akhir setiap iterasi

// melakukan 3 kali perulangan

for (let i =0; i < 3; i++) {
    console.log("hello world");
}