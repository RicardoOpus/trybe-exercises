// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
  for (i2 = 0; i2 < numbers.length; i2 += 1) {
    if (numbers[i2] <= menorNumero) {
      menorNumero = numbers[i2]
    }
  }
  }
console.log(menorNumero)
