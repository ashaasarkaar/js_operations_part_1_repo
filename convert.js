function incheToFeet(inche){
    const feet = inche / 12;
    return feet;
}

const salaatHeight = incheToFeet(75);
console.log(salaatHeight);