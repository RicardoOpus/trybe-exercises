// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (let i = 0; i < numbers.length; i += 1) {
  for (i2 = 0; i2 < numbers.length; i2 += 1) {
    if (numbers[i2] >= maiorNumero) {
      maiorNumero = numbers[i2]
    }
  }
  }
console.log(maiorNumero);

//outra solução melhor:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumber) {
    maiorNumber = numbers[index];
  }
}

console.log(maiorNumber);