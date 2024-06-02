// Function to find the third angle of a triangle given two angles
function findThirdAngle(a, b) {
    // The sum of angles in a triangle is always 180 degrees
    const totalAngle = 180;
    // Calculate the third angle
    const thirdAngle = totalAngle - a - b;
    return thirdAngle;
}

// Example usage
const a = 80; // First angle in degrees
const b = 65; // Second angle in degrees

const thirdAngle = findThirdAngle(a, b);

console.log("Third angle:", thirdAngle);