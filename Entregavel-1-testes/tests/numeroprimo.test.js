const verificarPrimo = require('../funcoes/numeroprimo');

test('7 deve ser primo', () => {
    expect(verificarPrimo(7)).toBe(true);
});

test('10 não deve ser primo', () => {
    expect(verificarPrimo(10)).toBe(false);
});

test('0 e 1 não são primos', () => {
    expect(verificarPrimo(0)).toBe(false);
    expect(verificarPrimo(1)).toBe(false);
});

test('deve lançar erro para entrada não inteira', () => {
    expect(() => verificarPrimo('abc')).toThrow(TypeError);
    expect(() => verificarPrimo(2.5)).toThrow(TypeError);
});
