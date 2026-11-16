const { validarArrayDeNumeros } = require('./validacoes');

/**
 * Soma todos os números de uma lista.
 * @param {number[]} numeros
 * @returns {number} soma dos elementos (0 para lista vazia)
 */
function calcularSomatorio(numeros) {
    validarArrayDeNumeros(numeros, 'numeros');

    let soma = 0;
    for (const numero of numeros) {
        soma += numero;
    }
    return soma;
}

module.exports = calcularSomatorio;
