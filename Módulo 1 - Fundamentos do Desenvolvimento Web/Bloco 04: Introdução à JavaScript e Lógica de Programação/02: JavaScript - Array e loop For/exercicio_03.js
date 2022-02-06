// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultSum = 0;

for (i = 0; i < numbers.length; i += 1) {
  resultSum = numbers[i] + resultSum;
}
  
console.log(resultSum / numbers.length);

// Resolvendo com for/of

let numbers2 = [5, 10, 20];
let resultSum2 = 0;


for (let somas of numbers2) {
  resultSum2 = somas + resultSum2;
}
console.log(resultSum2 / numbers2.length)

//outra solução
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);