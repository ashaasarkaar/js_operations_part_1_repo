// if the year is divisible by 400, then it is a leap year, else it is not a leap year

function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeapYearTrue = isLeapYear(2033);
console.log(isLeapYearTrue);