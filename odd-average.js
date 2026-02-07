/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 * keep all the odd number in the odds array.
 */ 

function oddAverage(numbers){
    // console.log(numbers);
    const odds = [];
   for(const number of numbers){
        if(number % 2 === 1){
           odds.push(number); 
        }  
   }
//    console.log(odds)
   let sumOfOdds = 0;
   for(const number of numbers){
        sumOfOdds +=number;
   }
   const count = odds.length;
//    console.log(sumOfOdds, count);
   const avg = sumOfOdds / count;
   return avg;
}
const numbers = [2, 10, 15, 7, 3, 9, 11];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ',avg);
