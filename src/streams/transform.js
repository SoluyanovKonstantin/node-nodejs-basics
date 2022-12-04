const transform = async () => {
    // Write your code here 
    process.stdin.on('data', (chunk) => {
        process.stdout.write(chunk.toString().split('').reverse().join('') + '\n')
    })
};

await transform();