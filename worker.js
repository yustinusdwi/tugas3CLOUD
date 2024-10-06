// worker.js
const { parentPort } = require('worker_threads');

// Simulasi pekerjaan berat, seperti perhitungan atau pemrosesan data
function doHeavyWork() {
    let result = '';
    for (let i = 0; i < 10; i++) {
        // Simulasi waktu proses dengan delay
        result += `Pekerjaan berat ke-${i + 1}\n`;
    }
    return result;
}

// Kirim hasil pekerjaan kembali ke thread utama
const output = doHeavyWork();
parentPort.postMessage(output);
