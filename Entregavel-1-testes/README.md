# Entregável 1 — Algoritmos Fundamentais com Testes Unitários

Implementação em JavaScript (Node.js) de seis algoritmos fundamentais, revisados com **programação defensiva** e **clean code**, e cobertos por **testes unitários com Jest**.

| Algoritmo | Arquivo | Função |
|---|---|---|
| Número primo | `funcoes/numeroprimo.js` | `verificarPrimo(numero)` |
| Somatório | `funcoes/somatorio.js` | `calcularSomatorio(numeros)` |
| Fibonacci | `funcoes/fibonacci.js` | `gerarFibonacci(quantidadeTermos)` |
| MDC (Euclides) | `funcoes/mdc.js` | `calcularMDC(primeiroNumero, segundoNumero)` |
| Quicksort | `funcoes/quicksort.js` | `quicksort(numeros)` |
| Contagem | `funcoes/contagem.js` | `contarValores(dados, limite)` |

## Estrutura do projeto

```
Entregavel-1/
├── funcoes/              # algoritmos (um arquivo por função)
│   ├── validacoes.js     # validações reutilizáveis de entrada
│   └── index.js          # exporta todas as funções
├── tests/                # testes unitários (Jest)
├── entregavel_1/
│   └── atividade.js      # programa interativo no terminal
├── entregavel_1_2/       # versão em Java da atividade #1
└── package.json
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior (já vem com o npm)

## Como executar os testes

Na pasta do projeto, rode:

```
npm install
npm test
```

O `npm install` baixa o Jest (listado em `devDependencies`) e o `npm test` executa todos os arquivos `*.test.js` da pasta `tests/`.

Exemplo de resultado:

```
PASS  tests/fibonacci.test.js
PASS  tests/quicksort.test.js
PASS  tests/contagem.test.js
PASS  tests/numeroprimo.test.js
PASS  tests/somatorio.test.js
PASS  tests/mdc.test.js

Test Suites: 6 passed, 6 total
Tests:       25 passed, 25 total
```

Para ver o nome de cada teste: `npx jest --verbose`

## Como executar o programa interativo

```
npm start
```

O programa pede as entradas de cada algoritmo no terminal. Se você digitar algo inválido (letras, vazio, número negativo no Fibonacci etc.), aparece uma mensagem de erro e o programa continua para o próximo algoritmo.

## Programação defensiva e clean code aplicados

- **Nomes significativos:** `verificarPrimo`, `quantidadeTermos`, `primeiroNumero`, `maioresOuIguais`, em vez de `n`, `a`, `x`.
- **Validação de entrada:** cada função confere o tipo dos parâmetros antes de calcular (`validacoes.js`).
- **Exceções claras:** `TypeError` para tipo errado (ex.: `'abc'`) e `RangeError` para valor fora do permitido (ex.: Fibonacci negativo, MDC de 0 e 0).
- **Tratamento de exceções:** o programa interativo usa `try/catch` em cada etapa, então um erro não derruba a execução.
- **Sem efeitos colaterais:** o `quicksort` devolve um novo array e não altera o original.
- **Responsabilidade única:** um algoritmo por arquivo, separado da parte de entrada/saída, o que deixa tudo testável.
- **Melhorias de algoritmo:** o teste de primo só verifica divisores até a raiz quadrada, e o MDC aceita números negativos.

## Autor

Jorge Gabriel — ADS, UNIFOR
