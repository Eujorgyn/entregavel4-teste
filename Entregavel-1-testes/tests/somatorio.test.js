const calcularSomatorio = require('../funcoes/somatorio');

test('a soma de [10, 20] deve ser 30', () => {
    expect(calcularSomatorio([10, 20])).toBe(30);
});

test('a soma de [-10, 20, 20] deve ser 30', () => {
    expect(calcularSomatorio([-10, 20, 20])).toBe(30);
});

test('a soma de um array vazio deve ser 0', () => {
    expect(calcularSomatorio([])).toBe(0);
});

test('deve lançar erro se o array tiver valor não numérico', () => {
    expect(() => calcularSomatorio([1, 'a', 3])).toThrow(TypeError);
    expect(() => calcularSomatorio('1,2,3')).toThrow(TypeError);
});
