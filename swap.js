let s = 7;
let a = 5;
const temp = s;
console.log(s, a)
s = a;
a = temp;
console.log(s, a)

// swap with destructure Method

let x = 10;
let y = 20;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

