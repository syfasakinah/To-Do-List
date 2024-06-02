// define variable
const radius = 5;

const diameter = calculateDiameter(radius);

const circumference = calculateCircumference(radius);

const area = calculateArea(radius);

console.log("Diameter:", diameter);
console.log("Circumference:", circumference);
console.log("Area:", area);

// Function diameter of a circle
function calculateDiameter(radius) {
    return 2 * radius;
}

// Function circumference of a circle
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Function area of a circle
function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
