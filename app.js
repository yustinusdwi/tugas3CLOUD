const express = require('express');
const { Worker } = require('worker_threads');
const path = require('path');
const app = express();
const port = 8000;

// Menyajikan file statis dari folder 'public'
app.use(express.static('public'));

// Route untuk root path (menyajikan halaman HTML)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/start', (req, res) => {
    const orders = [
        { namaPesanan: 'Spaghetti', waktuMasak: 5 },
        { namaPesanan: 'Pizza', waktuMasak: 7 },
        { namaPesanan: 'Burger', waktuMasak: 3 },
        { namaPesanan: 'Kentang Goreng', waktuMasak: 3 }
        
    ];

    const workers = [];
    let completedWorkers = 0;

    orders.forEach((order, index) => {
        const worker = new Worker('./order.js');
        worker.postMessage(order);  // Kirim pesanan ke worker

        worker.on('message', (message) => {
            console.log(message);
            completedWorkers++;

            if (completedWorkers === orders.length) {
                res.send('Semua pesanan selesai dimasak!');
            }
        });

        worker.on('error', (error) => {
            console.error(`Error dari worker ${index + 1}:`, error);
            completedWorkers++;
        });

        worker.on('exit', (code) => {
            if (code !== 0)
                console.error(`Worker ${index + 1} berhenti dengan kode ${code}`);
        });

        workers.push(worker);
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});