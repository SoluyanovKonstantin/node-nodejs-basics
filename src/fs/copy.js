import fs from 'fs'

const copy = async () => {
    fs.mkdir('files_copy', (err) => {
        if (err)
            throw Error('FS operation failed');
    })

    fs.readdir('files', {}, (err, files) => {
        if(err) throw Error('FS operation failed');
        files.forEach((file) => {
            fs.readFile(`files/${file}`, (err, data) => {
                fs.writeFile(`files_copy/${file}`, data, () => {});
            })
        })
    })
};

copy();