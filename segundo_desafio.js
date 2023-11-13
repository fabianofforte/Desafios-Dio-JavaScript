/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo eles:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem.

*/

const precoCombustivel = 5.45;
const kmPorLitro = 14;
const distanciaEmKm = 1000;


const litrosConsumidos = distanciaEmKm / kmPorLitro;

const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));