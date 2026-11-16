const calcularMDC = require('../funcoes/mdc');

test('o MDC de 5 e 10 deve ser 5', () => {
    expect(calcularMDC(5, 10)).toBe(5);
});

test('o MDC de 17 e 4 deve ser 1', () => {
    expect(calcularMDC(17, 4)).toBe(1);
});

test('o MDC deve ser positivo mesmo com números negativos', () => {
    expect(calcularMDC(-12, 18)).toBe(6);
});

test('deve lançar erro para entradas inválidas', () => {
    expect(() => calcularMDC(0, 0)).toThrow(RangeError);
    expect(() => calcularMDC(4.5, 2)).toThrow(TypeError);
});
