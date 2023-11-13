/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo eles:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem.

*/

const precoEtanol = 5.25;
const precoGasolina = 5.55;
const kmPorLitros = 14;
const distanciaEmKm = 1000;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol'){
	const valorGasto = litrosConsumidos * precoEtanol;
	console.log(valorGasto.toFixed(2));
} else{
	const valorGasto = litrosConsumidos * precoGasolina;
	console.log(valorGasto.toFixed(2));
}