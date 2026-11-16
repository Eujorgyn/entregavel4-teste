const contarValores = require('../funcoes/contagem');

test('deve contar 3 inteiros entre 1 e 5 em [1, 3, 5, 8]', () => {
    expect(contarValores([1, 3, 5, 8], 5)).toBe(3);
});

test('deve ignorar valores decimais na contagem', () => {
    expect(contarValores([2, 2.5, 3, 4.7, 10], 4)).toBe(2);
});

test('deve funcionar quando N é menor que o primeiro dado', () => {
    expect(contarValores([10, 7, 3, 12], 5)).toBe(2);
});

test('deve lançar erro para conjunto vazio ou limite inválido', () => {
    expect(() => contarValores([], 5)).toThrow(RangeError);
    expect(() => contarValores([1, 2], 'cinco')).toThrow(TypeError);
});
