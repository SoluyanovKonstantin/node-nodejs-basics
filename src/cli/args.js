const parseArgs = () => {
    let str = '';

    for(let i = 2; i < process.argv.length; i++) {
        if(i % 2) {
           str += process.argv[i] + ', '
        } else {
            str += `${process.argv[i].slice(2)} is `
        }
    }

    str = str.replace(/, $/, '')
    console.log(str)
};

parseArgs();