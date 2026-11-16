const { validarInteiro } = require('./validacoes');

/**
 * Calcula o Máximo Divisor Comum pelo algoritmo de Euclides.
 * @param {number} primeiroNumero
 * @param {number} segundoNumero
 * @returns {number} MDC (sempre positivo)
 */
function calcularMDC(primeiroNumero, segundoNumero) {
    validarInteiro(primeiroNumero, 'primeiroNumero');
    validarInteiro(segundoNumero, 'segundoNumero');
    if (primeiroNumero === 0 && segundoNumero === 0) {
        throw new RangeError('O MDC de 0 e 0 não é definido.');
    }

    let a = Math.abs(primeiroNumero);
    let b = Math.abs(segundoNumero);
    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

module.exports = calcularMDC;
