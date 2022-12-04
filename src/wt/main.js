import {Worker} from 'worker_threads'
import os from 'os'

const performCalculations = async () => {
    let result = [];
    for (let i = 0; i < os.cpus().length; i++) {
        const worker = new Worker('./worker.js', { workerData: 10 + i });
        worker.on('message', (value) => {
            result[i] = { status: 'resolved', data: value }

            if(i === os.cpus().length - 1) {
                console.log(result);
            }
        })
        worker.on('error', (value) => {
            result[i] = { status: 'error', data: null }

            if(i === os.cpus().length - 1) {
                console.log(result);
            }
        })
    }

};

await performCalculations();