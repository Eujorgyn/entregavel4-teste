const { validarArrayDeNumeros } = require('./validacoes');

/**
 * Ordena uma lista de números em ordem crescente usando Quicksort.
 * Não altera o array original (retorna um novo array).
 * @param {number[]} numeros
 * @returns {number[]}
 */
function quicksort(numeros) {
    validarArrayDeNumeros(numeros, 'numeros');
    return ordenar([...numeros]);
}

function ordenar(lista) {
    if (lista.length <= 1) return lista;

    const [pivo, ...resto] = lista;
    const menores = resto.filter((valor) => valor < pivo);
    const maioresOuIguais = resto.filter((valor) => valor >= pivo);

    return [...ordenar(menores), pivo, ...ordenar(maioresOuIguais)];
}

module.exports = quicksort;
