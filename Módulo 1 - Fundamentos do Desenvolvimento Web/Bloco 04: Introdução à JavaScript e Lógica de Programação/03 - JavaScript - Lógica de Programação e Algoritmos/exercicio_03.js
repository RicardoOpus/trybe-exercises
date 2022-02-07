// 3. Considere o array de strings abaixo:

/// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// Find biggest word:
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = ''; 

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > biggestWord.length) {
    biggestWord = array[i];
  }
}
console.log('The biggest word in this array is:', biggestWord);

// Fing smallest word:
let array = ['java', 'javascript', 'python', 'html', 'css'];
let smallestWord = array[1];

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < smallestWord.length) {
    smallestWord = array[i];
  }
}
console.log('The smallest word in this array is:', smallestWord);
