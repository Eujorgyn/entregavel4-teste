const { validarArrayDeNumeros } = require('./validacoes');

/**
 * Conta quantos valores INTEIROS do conjunto estão entre o primeiro
 * elemento do conjunto e o limite N (intervalo fechado).
 * @param {number[]} dados - conjunto de dados (não pode ser vazio)
 * @param {number} limite - valor de N
 * @returns {number} quantidade de valores no intervalo
 */
function contarValores(dados, limite) {
    validarArrayDeNumeros(dados, 'dados');
    if (dados.length === 0) {
        throw new RangeError('"dados" não pode ser vazio.');
    }
    if (typeof limite !== 'number' || Number.isNaN(limite)) {
        throw new TypeError(`"limite" deve ser um número. Recebido: ${limite}`);
    }

    const minimo = Math.min(dados[0], limite);
    const maximo = Math.max(dados[0], limite);

    return dados.filter(
        (valor) => Number.isInteger(valor) && valor >= minimo && valor <= maximo
    ).length;
}

module.exports = contarValores;
