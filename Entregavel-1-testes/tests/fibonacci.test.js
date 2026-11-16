const gerarFibonacci = require('../funcoes/fibonacci');

test('os 10 primeiros números de Fibonacci devem ser os corretos', () => {
    expect(gerarFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('os 2 primeiros números de Fibonacci devem ser 0 e 1', () => {
    expect(gerarFibonacci(2)).toEqual([0, 1]);
});

test('com 1 termo deve retornar [0] e com 0 termos, []', () => {
    expect(gerarFibonacci(1)).toEqual([0]);
    expect(gerarFibonacci(0)).toEqual([]);
});

test('deve lançar erro para quantidade negativa ou não inteira', () => {
    expect(() => gerarFibonacci(-3)).toThrow(RangeError);
    expect(() => gerarFibonacci(NaN)).toThrow(TypeError);
});
