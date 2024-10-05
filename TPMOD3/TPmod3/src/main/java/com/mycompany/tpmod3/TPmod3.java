/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.tpmod3;

/**
 *
 * @author nbpav
 */
public class TPmod3 {
    public static void main(String[] args) {
        Prodi pr1 = new Prodi();
        Prodi pr2 = new Prodi();
        pr1.setNama("Informatika");
        pr2.setNama("Rekayasa Perangkat lunak");
        
        Mahasiswa mhs1 = new Mahasiswa();
        Mahasiswa mhs2 = new Mahasiswa();
        
        mhs1.setNama("Heristam Yuniawan");
        mhs1.setProdi(pr1);
        mhs2.setNama("Nugroho Rahmanto");
        mhs2.setProdi(pr2);
        
        mhs1.displayMahasiswa();
        System.out.println();
        mhs2.displayMahasiswa();
    }
}
//class prodi

class Prodi{
    //field
    private String nama;
    
    //setter nama
    public void setNama(String nama){
        this.nama = nama; 
    }
    
    //getter nama
    public String getNama(){
        return this.nama;
    }
    
    @Override
    public String toString() {
        return this.nama;
    }
}
//class mahasiswa

class Mahasiswa{
    //field 
    private String nama;
    private Prodi prodi = new Prodi();
    
    //setter setter nama
    public void setNama(String nama){
        this.nama = nama; 
    }
    
    //setter prodi
    public void setProdi(Prodi prodi){
        this.prodi = prodi;
    } 
     
    
    //getter nama
    public String getNama(){
        return this.nama;
    }
    //getter prodi
    public Prodi getProdi(){
        return this.prodi;
    }
    
    
    //implementasi display mahasiswa
    void displayMahasiswa(){
        System.out.print("Nama : "+ this.getNama());
        System.out.print("Prodi : "+ this.getProdi().toString());
    }

}