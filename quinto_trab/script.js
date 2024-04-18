// Exercício 1:

var a = 10;
console.log(a);

// Var pode ser reatribuído
a = 20;
console.log(a);

let b = 30;
console.log(b);

// Let pode ser reatribuído
b = 40;
console.log(b);


const c = 50;
console.log(c);
// Const não pode ser reatribuído


// ===========================


// Exercício 2:

let array = [1, 2, 3, 4, 5];

console.log(array.length);

console.log(array[2]); 

array[5] = 6;
console.log(array); 

array.push(7);
console.log(array); 

let removedElement = array.pop();
console.log(removedElement); 
console.log(array);

let shiftedElement = array.shift();
console.log(shiftedElement); 
console.log(array); 

array.unshift(0);
console.log(array); 
