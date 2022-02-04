
// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// Adição
const a = 5;
const b = 10;
console.log(a + b);

// Subtração
const a = 10;
const b = 7;
console.log(a - b);

// Divisão
const a = 8;
const b = 2;
console.log(a / b);

// Módulo
const a = 9;
const b = 2;
console.log(a % b);

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const a = 8 
const b = 8

if (a > b) {
  console.log("O número maior é : ", a);
} else if (a == b) {
  console.log("Os númetos são iguais!")
} else {
  console.log("O número maior é: ", b)
}

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

// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const a = 0;

if (a == 0) {
  console.log("O número é zero");
} else if (a > 0) {
  console.log("O número é positivo");
} else {
  console.log("O número é negativo");
}

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 150;
const angulo2 = 10;
const angulo3 = 20;

if (angulo1 + angulo2 + angulo3 == 180) {
  console.log("true");
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Inválido")
} else {
  console.log("false");
}

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const peca = "Dama";
const pecaLow = peca.toLowerCase();

switch (pecaLow) {
  case "rei":
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
    break;
  case "rainha":
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
    break;
  case "dama":
    console.log("A rainha (ou Dama) move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
    break;
  case "bispo":
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
    break;
  case "cavalo":
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
    break;
  case "torre":
    console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
    break;
  case "peão":
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
    break;
  default:
    console.log("A Peça", pecaLow ,"não é uma inválida!");
}

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

/*
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

const nota = 10;

if (nota > 100) {
  console.log("Erro: valor maior que 100");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else if (nota >= 0) {
  console.log("F");
} else {
  console.log("Erro: valor menor que 0")
}

// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const number1 = 4;
const number2 = 2;
const number3 = 3;

if ((number1 % 2 == 0) || (number2 % 2 == 0) || (number3 % 2 == 0)) {
  console.log("true");
} else {
  console.log("false");
}

// 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const nlet names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (nome of names) {
  console.log(nome);
}

umber1 = 4;
const number2 = 5;
const number3 = 4;

if ((number1 % 2 == 1) || (number2 % 2 == 1) || (number3 % 2 == 1)) {
  console.log("true");
} else {
  console.log("false");
}

// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

/* Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

const custo = 13.5;
const imposto = 20; //valor em porcentagem
const custoSemImposto = (custo - (custo * imposto / 100))
const valorVenda = 17.50;
const venda = 20000;

if ((custo < 0) || (imposto <= 0) || (valorVenda < 0) || (venda < 0)) {
  console.log("Nenhum valor pode ser menor que 0")
} else {
  console.log((valorVenda - custoSemImposto) * venda)
}