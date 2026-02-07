/**
 * array has some duplicate elements
 * remove the duplicates items and make a unique array there won't repeat same value in two times
 */

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    // console.log(unique);
    return unique;
}

const numbers = [2, 5, 8, 2, 5, 9, 8, 7, 7, 1];
const familyMembers = ['salaat', 'afifaa', 'salaat', 'amraa', 'shobdo', 'afifaa', 'amraa', 'shobdo', 'azaan'];
const uniqueArray = noDuplicate(familyMembers);
console.log(uniqueArray);
const uniqueArray2 = noDuplicate(numbers);
console.log(uniqueArray2);