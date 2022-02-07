// 4. Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// let number = 10;
// let result = 2;

// for (let i = 3; i <= number; i += 1) {
//   if (i % 2 == 1) {
//     result = i;
//   } 
// }
// console.log(result);

let biggestPrimeNumber = 0;

for (let i = 0; i <= 50; i += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < i; currentDivisor += 1) {
    if (i % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = i;
  }
}

console.log(biggestPrimeNumber);