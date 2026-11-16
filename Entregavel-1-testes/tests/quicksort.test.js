const quicksort = require('../funcoes/quicksort');

test('[5, 4, 3, 1] ordenado deve ser [1, 3, 4, 5]', () => {
    expect(quicksort([5, 4, 3, 1])).toEqual([1, 3, 4, 5]);
});

test('[100, 4, 3, 150] ordenado deve ser [3, 4, 100, 150]', () => {
    expect(quicksort([100, 4, 3, 150])).toEqual([3, 4, 100, 150]);
});

test('deve manter números repetidos e negativos', () => {
    expect(quicksort([3, -1, 3, 0])).toEqual([-1, 0, 3, 3]);
});

test('não deve alterar o array original', () => {
    const original = [3, 2, 1];
    quicksort(original);
    expect(original).toEqual([3, 2, 1]);
});

test('deve lançar erro se a entrada não for um array de números', () => {
    expect(() => quicksort(null)).toThrow(TypeError);
    expect(() => quicksort([1, 'x'])).toThrow(TypeError);
});
