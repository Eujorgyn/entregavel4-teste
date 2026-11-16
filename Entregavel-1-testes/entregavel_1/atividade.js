const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const {
    verificarPrimo,
    calcularSomatorio,
    gerarFibonacci,
    calcularMDC,
    quicksort,
    contarValores,
} = require('../funcoes');

// ---------- Conversão da entrada do usuário ----------

function lerInteiro(texto) {
    const valor = Number(texto.trim());
    if (texto.trim() === '' || !Number.isInteger(valor)) {
        throw new TypeError(`"${texto}" não é um número inteiro válido.`);
    }
    return valor;
}

function lerNumero(texto) {
    const valor = Number(texto.trim());
    if (texto.trim() === '' || Number.isNaN(valor)) {
        throw new TypeError(`"${texto}" não é um número válido.`);
    }
    return valor;
}

function lerListaDeNumeros(texto) {
    return texto.split(',').map(lerNumero);
}

// Executa uma etapa e trata o erro sem derrubar o programa
async function executarEtapa(titulo, etapa) {
    try {
        await etapa();
    } catch (erro) {
        console.log(`-> Erro em ${titulo}: ${erro.message}\n`);
    }
}

// ---------- Programa principal ----------

async function executarAlgoritmos() {
    const rl = readline.createInterface({ input, output });

    await executarEtapa('PRIMO', async () => {
        const numero = lerInteiro(await rl.question('1. PRIMO: Digite um número inteiro: '));
        console.log(`-> O número ${numero} é primo? ${verificarPrimo(numero) ? 'Sim' : 'Não'}\n`);
    });

    await executarEtapa('SOMATÓRIO', async () => {
        const numeros = lerListaDeNumeros(await rl.question('2. SOMATÓRIO: Digite números separados por vírgula: '));
        console.log(`-> Somatório: ${calcularSomatorio(numeros)}\n`);
    });

    await executarEtapa('FIBONACCI', async () => {
        const termos = lerInteiro(await rl.question('3. FIBONACCI: Quantos termos você quer? '));
        console.log(`-> Sequência: ${gerarFibonacci(termos).join(', ')}\n`);
    });

    await executarEtapa('MDC', async () => {
        const primeiro = lerInteiro(await rl.question('4. MDC: Digite o PRIMEIRO número: '));
        const segundo = lerInteiro(await rl.question('4. MDC: Digite o SEGUNDO número: '));
        console.log(`-> O MDC é: ${calcularMDC(primeiro, segundo)}\n`);
    });

    await executarEtapa('QUICKSORT', async () => {
        const numeros = lerListaDeNumeros(await rl.question('5. QUICKSORT: Digite números separados por vírgula: '));
        console.log(`-> Array ordenado: ${quicksort(numeros).join(', ')}\n`);
    });

    await executarEtapa('CONTAGEM', async () => {
        const dados = lerListaDeNumeros(await rl.question('6. CONTAGEM: Digite o conjunto de dados separados por vírgula: '));
        const limite = lerNumero(await rl.question('Digite o valor de N (limite): '));
        const quantidade = contarValores(dados, limite);
        console.log(`-> Existem ${quantidade} valores inteiros entre ${dados[0]} e ${limite} no conjunto.\n`);
    });

    rl.close();
}

executarAlgoritmos();
