import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
    let stream = fs.createReadStream('files/archive.gz')
    stream.pipe(zlib.createUnzip()).pipe(fs.createWriteStream('files/fileToCompress.txt')).on('finish', () => {})
};

await decompress();