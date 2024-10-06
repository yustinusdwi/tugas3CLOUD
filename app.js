const express = require('express');
const { Worker } = require('worker_threads');
const app = express();
const port = 8000;

// Middleware untuk melayani file statis
app.use(express.static('public'));

app.get('/', (req, res) => {
    const numWorkers = parseInt(req.query.workers) || 1; // Mengambil jumlah worker dari query parameter
    const workers = [];
    let completedWorkers = 0;
    let combinedOutput = [];

    for (let i = 0; i < numWorkers; i++) {
        const worker = new Worker('./worker.js');
        workers.push(worker);

        worker.on('message', (message) => {
            combinedOutput.push({ worker: i + 1, output: message });
            completedWorkers++;

            if (completedWorkers === numWorkers) {
                sendResponse(res, combinedOutput);
            }
        });

        worker.on('error', (error) => {
            console.error(`Error dari worker ${i + 1}:`, error);
            completedWorkers++;

            if (completedWorkers === numWorkers) {
                sendResponse(res, combinedOutput);
            }
        });

        worker.on('exit', (code) => {
            if (code !== 0)
                console.error(`Worker ${i + 1} berhenti dengan kode ${code}`);
        });
    }

    // Menghentikan semua pekerja jika tidak diperlukan lagi
    setTimeout(() => {
        workers.forEach(worker => worker.terminate());
    }, 5000); // Hentikan setelah 5 detik jika belum selesai
});

function sendResponse(res, output) {
    let tableRows = output.map(item => `
        <tr>
            <td>Worker ${item.worker}</td>
            <td><pre>${item.output}</pre></td>
        </tr>
    `).join('');

    res.send(`
        <style>
            body {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                min-height: 100vh;
                margin: 0;
            }
            .container {
                width: 80%;
                max-width: 1200px;
            }
            h1, h2 {
                text-align: center;
                margin-top: 50px;
            }
            p{
                text-align: center;
            }
            form{
                text-align: center;
            }
            table {
                border-collapse: collapse;
                width: 100%;
                margin-top: 20px;
            }
            th, td {
                border: 1px solid #000;
                padding: 10px;
                text-align: left;
            }
            th {
                background-color: #f2f2f2;
            }
            a {
                display: block;
                margin-top: 20px;
                text-decoration: underline;
                color: blue;
                font-size: 18px;
                text-align: center;
            }
            .thread-output {
                margin-top: 20px;
                width: 100%;
            }
            .worker-output {
                width: 100%;
                margin-top: 20px;
            }
            .worker-output th, .worker-output td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            .worker-output th {
                background-color: #f2f2f2;
            }
            .worker-output pre {
                margin: 0;
                white-space: pre-wrap;
                word-break: break-word;
            }
        </style>
        <div class="container">
            <h1>WORKER THREADS | TUGAS 3 CLOUD COMPUTING IF-46-10</h1>
            <p>Anggota kelompok:</p>
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
            <br>
            <br>
            <form action="/" method="get">
                <label for="workers">Jumlah Worker:</label>
                <input type="number" id="workers" name="workers" min="1" value="1">
                <button type="submit">Jalankan</button>
            </form>
            <div class="thread-output">
                <h2>Output dari Threading Pekerja:</h2>
                <table class="worker-output">
                    <thead>
                        <tr>
                            <th>Worker</th>
                            <th>Output</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    `);
};

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
