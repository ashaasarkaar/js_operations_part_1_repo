function incheToFeet(inche){
    const feet = inche / 12;
    const feetFraction = parseInt(feet);
    const feetRemainder = inche % 12;
    const finalResult = (feetFraction + ' feet ' + feetRemainder + ' inche ');
    return finalResult;
}

const salaatHeight = incheToFeet(75);
console.log(salaatHeight);

