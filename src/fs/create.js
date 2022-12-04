import fs from 'fs'

const create = async () => {
    fs.readFile('files/fresh.txt', (err) => {
        if(err)
            fs.writeFile('files/fresh.txt', 'I am fresh and young', (err) => {
            })
        else
           throw Error('FS operation failed') 
    })

};

await create();