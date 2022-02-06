// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 9; 
const b = 9;
const c = 9;

if ((a > b) && (a > c)) {
  console.log("O número maior é : ", a);
} else if ((a == b) && (a == c)) {
  console.log("Os númetos são iguais!");
} else if ((b > a) && (b > c)) {
  console.log("O número maior é : ", b);
} else if ((b == a) && (b == c)) {
  console.log("Os númetos são iguais!");
} else {
  console.log("O número maior é: ", c);
}
