import crypto from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
    // Write your code here 
    fs.readFile('./files/fileToCalculateHashFor.txt', (err, data) => {
        console.log(crypto.createHash('sha256').update(data).digest('hex'));
    })
};

await calculateHash();