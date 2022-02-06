// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (i = 0; i < numbers.length; i += 1) {
  for (i2 = 0; i2 < numbers.length; i2 += 1) {
    if (numbers[i2] >= maiorNumero) {
      maiorNumero = numbers[i2]
    }
  }
  }
console.log(maiorNumero);