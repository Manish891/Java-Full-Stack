function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDayOfYear(day, month, year) {
    const monthNames = {
        "jan": 1, "january": 1, "01": 1,
        "feb": 2, "february": 2, "02": 2,
        "mar": 3, "march": 3, "03": 3,
        "apr": 4, "april": 4, "04": 4,
        "may": 5, "05": 5,
        "jun": 6, "june": 6, "06": 6,
        "jul": 7, "july": 7, "07": 7,
        "aug": 8, "august": 8, "08": 8,
        "sep": 9, "september": 9, "09": 9,
        "oct": 10, "october": 10, "10": 10,
        "nov": 11, "november": 11, "11": 11,
        "dec": 12, "december": 12, "12": 12
    };
    let monthNumber = monthNames[month.toLowerCase()];
    if (!monthNumber) {
        return "Invalid month input!";
    }
    const daysInMonths = isLeapYear(year)
        ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day < 1 || day > daysInMonths[monthNumber - 1]) {
        return "Invalid day for the given month!";
    }
    let dayOfYear = day;
    for (let i = 0; i < monthNumber - 1; i++) {
        dayOfYear += daysInMonths[i];
    }
    return `The day of the year for ${day}${getOrdinal(day)} of ${month}, ${year} is: ${dayOfYear}`;
}
function getOrdinal(n) {
    if (n > 3 && n < 21) return "th"; 
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}
console.log(getDayOfYear(31, "Dec",2024));