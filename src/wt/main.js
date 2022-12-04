import {Worker} from 'worker_threads'
import os from 'os'

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

const performCalculations = async () => {
    let promises = [];
    for (let i = 0; i < os.cpus().length; i++) {
        promises.push(runService(i + 10).then(value => {
            return {status: 'resolved', data: value}
        }).catch(err => {
            return {status: 'error', data: null}
        }))
    }

    Promise.all(promises).then(value => {
        console.log(value)
    })
};

await performCalculations();