// simple logic leapyear
/* 1. those year that is not divisible by 100, if the year is divisible by 4: then it will be a leap year*/

function isLeapYear(year){
    if(year % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeapYearTrue = isLeapYear(2033);
console.log(isLeapYearTrue);