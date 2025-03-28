
let nomes = ["Ana", "João", "Carlos", "Maria", "Pedro"];

console.log("Terceiro nome: " + nomes[2]);

nomes.push("Lucas"); 
nomes.unshift("Juliana"); 

console.log("Array após adicionar nomes: ", nomes);

nomes.pop();
console.log("Array após remover o último nome: ", nomes);

let valores = [2, 4, 6, 8];
let dobrados = valores.map(valor => valor * 2);
console.log("Valores dobrados: ", dobrados);

let numeros = [1, 3, 5, 7, 9];
let maioresQueCinco = numeros.filter(numero => numero > 5);
console.log("Números maiores que 5: ", maioresQueCinco);
