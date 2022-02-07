/* 2. Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let palavra = 'tryber';
*/

let palavra = 'tryber';
let revertida = '';

for (let i = 0; i < palavra.length; i += 1) {
  revertida += palavra[palavra.length - 1 - i];
}
console.log(revertida);


// Outra solução:

let palavra = 'tryber';
console.log(palavra.split('').reverse().join(''));