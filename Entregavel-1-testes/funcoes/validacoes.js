/**
 * Funções auxiliares de validação (programação defensiva).
 * Lançam erros claros quando a entrada não é do tipo esperado.
 */

function validarInteiro(valor, nomeParametro) {
    if (typeof valor !== 'number' || !Number.isInteger(valor)) {
        throw new TypeError(`"${nomeParametro}" deve ser um número inteiro. Recebido: ${valor}`);
    }
}

function validarArrayDeNumeros(lista, nomeParametro) {
    if (!Array.isArray(lista)) {
        throw new TypeError(`"${nomeParametro}" deve ser um array.`);
    }
    lista.forEach((item, indice) => {
        if (typeof item !== 'number' || Number.isNaN(item)) {
            throw new TypeError(`"${nomeParametro}[${indice}]" não é um número válido. Recebido: ${item}`);
        }
    });
}

module.exports = { validarInteiro, validarArrayDeNumeros };
