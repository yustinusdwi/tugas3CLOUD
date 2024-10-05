/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.tpnum2;

/**
 *
 * @author nbpav
 */
import java.util.Scanner;

public class TPnum2 {
    public static void main(String[] args) {
        // Membuat Scanner untuk input pengguna
        Scanner scanner = new Scanner(System.in);

        // Meminta input dari pengguna untuk ukuran matriks n x n
        System.out.println("Perkalian Matriks nxn");
        System.out.print("n: ");
        int n = scanner.nextInt();

        // Validasi input
        if (n <= 0) {
            System.out.println("Input harus > 0.");
            scanner.close();
            return;
        }

        // Inisialisasi matriks
        int[][] matrix1 = new int[n][n];
        int[][] matrix2 = new int[n][n];
        int[][] hasil = new int[n][n];

        // Input nilai untuk matriks 1
        System.out.println("Isi matrix 1:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrix1[i][j] = scanner.nextInt();
            }
        }

        // Input nilai untuk matriks 2
        System.out.println("Isi matrix 2:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrix2[i][j] = scanner.nextInt();
            }
        }

        // Melakukan perkalian matriks
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                hasil[i][j] = 0; // Setel nilai awal hasil ke 0
                for (int k = 0; k < n; k++) {
                    hasil[i][j] += matrix1[i][k] * matrix2[k][j];
                }
            }
        }

        // Menampilkan hasil perkalian
        System.out.println("Hasil perkalian:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(hasil[i][j] + " ");
            }
            System.out.println(); // Pindah baris setelah setiap baris matriks
        }

        // Menutup Scanner
        scanner.close();
    }
}
