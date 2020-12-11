//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  Go to the editor

// Primeiro separei as variáveis que serão usadas no desafio;
var a = 5;
var b = 6;
var c = 7;
var p = (a + b + c) / 2;
var Area = Math.sqrt(p * (p - a) * (p - b) * (p - c));//formula para saber a área de um triangulo escalêno//Math.sqrt == raiz quadrada

// Criei a função para mostrar o valor da área do triangulho escaleno;

function chamaArea() {
    console.log(Area);
}
chamaArea()