const parseEnv = () => {
    let str = '';
    Object.keys(process.env).forEach(envVariable => {
        if(envVariable.split('_')[0] === 'RSS') {
            str += `${envVariable}=${process.env[envVariable]}; `
        }
    })

    console.log(str);
};

parseEnv();