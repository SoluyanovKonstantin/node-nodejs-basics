import fs from 'fs'

const list = async () => {
    fs.readdir('files', {}, (err, files) => {
        if(err) throw Error('FS operation failed');
        files.forEach((file) => {
            console.log(file);
        })
    })
};

await list();