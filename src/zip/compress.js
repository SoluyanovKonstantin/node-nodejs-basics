import zlib from 'zlib';
import fs from 'fs';

const compress = async () => {
    // Write your code here 
    let stream = fs.createReadStream('files/fileToCompress.txt', 'utf-8')
    stream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('files/archive.gz')).on('finish', () => {})
};

await compress();