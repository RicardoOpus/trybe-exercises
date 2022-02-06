// ### 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultSum = 0;

for (i = 0; i < numbers.length; i += 1) {
  resultSum = numbers[i] + resultSum;
}
console.log(resultSum); 


// Resolvendo com for/of

let numbers2 = [5, 10, 20];
let resultSum2 = 0;


for (let somas of numbers2) {
  resultSum2 = somas + resultSum2;
}
console.log(resultSum2);
