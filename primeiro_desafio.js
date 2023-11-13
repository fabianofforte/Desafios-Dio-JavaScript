/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo eles:
1 - Preço do combustivel
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem.

*/

const precoCombustivel = 5.45;
const kmPorLitro = 14;
const distanciaEmKm = 1000;


const litrosConsumidos = distanciaEmKm / kmPorLitro;

const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));