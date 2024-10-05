const express = require('express');
const app = express();
const port = 8001;

// Middleware untuk melayani file statis
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <style>
            body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh; /* Menjaga tinggi 100% dari viewport */
                margin: 0; /* Menghapus margin default */
            }
            h1 {
                text-align: center; /* Memastikan teks di dalam h1 terpusat */
            }
            table {
                border-collapse: collapse; /* Menggabungkan border tabel */
                width: 80%; /* Mengatur lebar tabel */
                margin-top: 20px; /* Memberi jarak antara judul dan tabel */
            }
            th, td {
                border: 1px solid #000; /* Memberi border pada sel */
                padding: 10px; /* Memberi padding pada sel */
                text-align: left; /* Menyusun teks ke kiri */
            }
            th {
                background-color: #f2f2f2; /* Mengatur warna latar belakang header */
            }
            a {
                margin-top: 20px; /* Memberi jarak antara tabel dan link */
                text-decoration: underline; /* Menambahkan garis bawah pada teks */
                color: blue; /* Mengatur warna tautan */
                font-size: 18px; /* Mengatur ukuran font */
            }
        </style>
        <h1>TUGAS 3 CLOUD COMPUTING IF-46-10</h1>
        <p> Anggota kelompok :</p>
        <table>
            <tr>
                <th>Nama</th>
                <th>NIM</th>
                <th>PIC</th>
            </tr>
            <tr>
                <td>Yustinus Dwi Adyra</td>
                <td>1301223129</td>
                <td>NO 2C</td>
            </tr>
            <tr>
                <td>Khairani Razita Putri</td>
                <td>1301223373</td>
                <td>NO 2B</td>
            </tr>
            <tr>
                <td>Chatelia Dyah Prameswari</td>
                <td>1301223320</td>
                <td>NO 2A</td>
            </tr>
            <tr>
                <td>Azrian Rifqi Radhitya</td>
                <td>1301223292</td>
                <td>NO 1</td>
            </tr>
        </table>
        <a href="https://github.com/yustinusdwi/tugas3CLOUD" target="_blank">GitHub kelompok kami</a>
    `);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});