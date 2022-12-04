import fs from 'fs'

const read = async () => {
    // Write your code here 
    let stream = fs.createReadStream('./files/fileToRead.txt', 'utf-8');

    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })    
};

await read();