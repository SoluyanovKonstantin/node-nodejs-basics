import fs from 'fs';

const write = async () => {
    process.stdin.on('data', (chunk) => {
        fs.createWriteStream('files/fileToWrite.txt', {flags: 'a'}).write(chunk);
    })
};

await write();