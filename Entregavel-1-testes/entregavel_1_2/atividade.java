import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

public class atividade {

    public static boolean verificaPrimo(int numero) {
        if (numero <= 1) return false;
        for (int i = 2; i < numero; i++) {
            if (numero % i == 0) return false;
        }
        return true;
    }

    public static double calcularSomatorio(String[] array) {
        double soma = 0;
        for (String s : array) {
            soma += Double.parseDouble(s.trim());
        }
        return soma;
    }

    public static List<Integer> gerarFibonacci(int n) {
        List<Integer> sequencia = new ArrayList<>();
        if (n <= 0) return sequencia;
        sequencia.add(0);
        if (n == 1) return sequencia;
        sequencia.add(1);
        
        for (int i = 2; i < n; i++) {
            sequencia.add(sequencia.get(i - 1) + sequencia.get(i - 2));
        }
        return sequencia;
    }

    public static int calcularMDC(int a, int b) {
        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }
        return a;
    }

    public static List<Integer> quicksort(List<Integer> lista) {
        if (lista.size() <= 1) return lista;
        
        int pivo = lista.get(0);
        List<Integer> menores = new ArrayList<>();
        List<Integer> maiores = new ArrayList<>();
        
        for (int i = 1; i < lista.size(); i++) {
            if (lista.get(i) < pivo) {
                menores.add(lista.get(i));
            } else {
                maiores.add(lista.get(i));
            }
        }
        
        List<Integer> resultado = new ArrayList<>();
        resultado.addAll(quicksort(menores));
        resultado.add(pivo);
        resultado.addAll(quicksort(maiores));
        
        return resultado;
    }

    public static int contarValores(String[] dadosStr, double n) {
        double primeiroDado = Double.parseDouble(dadosStr[0].trim());
        int contador = 0;
        
        double min = Math.min(primeiroDado, n);
        double max = Math.max(primeiroDado, n);
        
        for (String s : dadosStr) {
            double valorAtual = Double.parseDouble(s.trim());
            if (valorAtual == Math.floor(valorAtual) && valorAtual >= min && valorAtual <= max) {
                contador++;
            }
        }
        return contador;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("1. PRIMO: Digite um numero inteiro positivo: ");
        int numPrimo = Integer.parseInt(scanner.nextLine());
        boolean ehPrimo = verificaPrimo(numPrimo);
        System.out.println("-> O numero " + numPrimo + " e primo? " + (ehPrimo ? "Sim" : "Nao") + "\n");

        System.out.print("2. SOMATORIO: Digite numeros separados por virgula: ");
        String[] arraySoma = scanner.nextLine().split(",");
        System.out.println("-> Somatorio: " + calcularSomatorio(arraySoma) + "\n");

        System.out.print("3. FIBONACCI: Digite quantos termos voce quer: ");
        int termosFibo = Integer.parseInt(scanner.nextLine());
        System.out.println("-> Sequencia: " + gerarFibonacci(termosFibo) + "\n");

        System.out.print("4. MDC: Digite o PRIMEIRO numero: ");
        int numA = Integer.parseInt(scanner.nextLine());
        System.out.print("4. MDC: Digite o SEGUNDO numero: ");
        int numB = Integer.parseInt(scanner.nextLine());
        System.out.println("-> O MDC e: " + calcularMDC(numA, numB) + "\n");

        System.out.print("5. QUICKSORT: Digite numeros separados por virgula: ");
        String[] quickStr = scanner.nextLine().split(",");
        List<Integer> arrayQuick = new ArrayList<>();
        for (String s : quickStr) {
            arrayQuick.add(Integer.parseInt(s.trim()));
        }
        System.out.println("-> Array ordenado: " + quicksort(arrayQuick) + "\n");

        System.out.print("6. CONTAGEM: Digite o conjunto de dados separados por virgula: ");
        String[] dadosContagem = scanner.nextLine().split(",");
        System.out.print("Digite o valor de N (limite): ");
        double nContagem = Double.parseDouble(scanner.nextLine());
        int qtd = contarValores(dadosContagem, nContagem);
        System.out.println("-> Existem " + qtd + " valores inteiros entre " + dadosContagem[0].trim() + " e " + nContagem + " no conjunto.\n");

        scanner.close();
    }
}