import child_process from 'child_process';

const spawnChildProcess = async (args) => {
    child_process.fork('files/script.js', args)
};

spawnChildProcess(['--harmony', 'ddd']);