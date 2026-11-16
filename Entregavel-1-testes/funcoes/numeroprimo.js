const { validarInteiro } = require('./validacoes');

/**
 * Verifica se um número inteiro é primo.
 * @param {number} numero - inteiro a ser verificado
 * @returns {boolean} true se for primo
 */
function verificarPrimo(numero) {
    validarInteiro(numero, 'numero');

    if (numero <= 1) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;

    // Só é preciso testar divisores ímpares até a raiz quadrada
    for (let divisor = 3; divisor * divisor <= numero; divisor += 2) {
        if (numero % divisor === 0) return false;
    }
    return true;
}

module.exports = verificarPrimo;
