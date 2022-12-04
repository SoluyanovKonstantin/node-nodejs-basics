import fs from 'fs'

const remove = async () => {
    fs.unlink('files/fileToRemove.txt', (err) => {
        if(err)
            throw Error('FS operation failed');
    })
};

await remove();