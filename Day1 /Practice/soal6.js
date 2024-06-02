function daysToYearsMonthsDays(days) {
    const DAYS_IN_YEAR = 365;
    const DAYS_IN_MONTH = 30;
    
    // Calculate years
    let years = Math.floor(days / DAYS_IN_YEAR);
    
    // Calculate remaining days after removing years
    let remainingDays = days % DAYS_IN_YEAR;
    
    // Calculate months
    let months = Math.floor(remainingDays / DAYS_IN_MONTH);
    
    // Calculate remaining days after removing months
    let daysLeft = remainingDays % DAYS_IN_MONTH;
    
    return {
        years: years,
        months: months,
        days: daysLeft
    };
}

let days1 = 400;
let days2 = 366;
let result1 = daysToYearsMonthsDays(days1);
let result2 = daysToYearsMonthsDays(days2);

console.log(`${days1} days -> ${result1.years} years, ${result1.months} months, and ${result1.days} days.`);
console.log(`${days2} days -> ${result2.years} years, ${result2.months} months, and ${result2.days} days.`);
