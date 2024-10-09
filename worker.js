const { parentPort } = require('worker_threads');

// Fungsi untuk mensimulasikan memasak pesanan
function masakPesanan(namaPesanan, waktuMasak) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Pesanan selesai: ${namaPesanan}`);
        }, waktuMasak * 1000);  // waktu memasak dalam detik
    });
}

// Menerima pesan dari thread utama
parentPort.on('message', async (pesanan) => {
    console.log(`Koki mulai memasak: ${pesanan.namaPesanan}`);
    const hasil = await masakPesanan(pesanan.namaPesanan, pesanan.waktuMasak);
    parentPort.postMessage(hasil);  // Kirim hasil kembali ke thread utama
});