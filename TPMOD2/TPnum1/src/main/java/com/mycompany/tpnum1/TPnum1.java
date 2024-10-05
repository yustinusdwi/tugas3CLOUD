package com.mycompany.tpnum1;

import java.util.Scanner;

public class TPnum1 {

    // Metode untuk menghitung deret Fibonacci
    public static int[] hitungFibonacci_1301223129(int n) {
        int[] fibonacciArray_1301223129 = new int[n];
        
        // Mengisi dua nilai pertama
        if (n > 0) {
            fibonacciArray_1301223129[0] = 1;
        }
        if (n > 1) {
            fibonacciArray_1301223129[1] = 1;
        }
        
        // Menghitung sisa deret Fibonacci
        for (int i = 2; i < n; i++) {
            fibonacciArray_1301223129[i] = fibonacciArray_1301223129[i - 1] + fibonacciArray_1301223129[i - 2];
        }

        return fibonacciArray_1301223129;
    }

    public static void main(String[] args) {
        // Membuat Scanner untuk input pengguna
        Scanner scanner = new Scanner(System.in);

        // Meminta input dari pengguna
        System.out.print("Masukkan nilai n (n > 0): ");
        int n = scanner.nextInt();

        // Memastikan input valid
        if (n <= 0) {
            System.out.println("Input harus > 0.");
            return;
        }

        // Menghitung deret Fibonacci
        int[] fibonacciArray_1301223129 = hitungFibonacci_1301223129(n);

        // Menampilkan hasil Fibonacci
        System.out.println("Output :");
        for (int i = 0; i < n; i++) {
            System.out.print(fibonacciArray_1301223129[i] + " ");
        }

        // Baris baru setelah output
        System.out.println();
        
        // Menutup Scanner
        scanner.close();
    }
}