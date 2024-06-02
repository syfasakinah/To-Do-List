// Function to calculate the difference between two dates in days
function getDateDifferenceInDays(date1, date2) {
    // Convert both dates to UTC
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    // Calculate the difference in milliseconds
    const difference_ms = Math.abs(utc2 - utc1);

    // Convert the difference back to days
    const milliseconds_per_day = 1000 * 60 * 60 * 24;
    const difference_days = Math.floor(difference_ms / milliseconds_per_day);

    return difference_days;
}

// Example usage
const startDate = new Date("2022-01-20");
const endDate = new Date("2022-01-22");

const differenceInDays = getDateDifferenceInDays(startDate, endDate);

console.log("Difference in days:", differenceInDays);