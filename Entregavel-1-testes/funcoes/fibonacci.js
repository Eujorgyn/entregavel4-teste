const { validarInteiro } = require('./validacoes');

/**
 * Gera os N primeiros termos da sequência de Fibonacci.
 * @param {number} quantidadeTermos - inteiro >= 0
 * @returns {number[]}
 */
function gerarFibonacci(quantidadeTermos) {
    validarInteiro(quantidadeTermos, 'quantidadeTermos');
    if (quantidadeTermos < 0) {
        throw new RangeError('"quantidadeTermos" não pode ser negativo.');
    }

    if (quantidadeTermos === 0) return [];
    if (quantidadeTermos === 1) return [0];

    const sequencia = [0, 1];
    for (let indice = 2; indice < quantidadeTermos; indice++) {
        sequencia.push(sequencia[indice - 1] + sequencia[indice - 2]);
    }
    return sequencia;
}

module.exports = gerarFibonacci;
