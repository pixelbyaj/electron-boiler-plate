const { spawn } = require('child_process');
const { debug } = require('console');
const server = {
    startBackendServer: (command, args) => {
        const process = spawn(command, args);
debugger;
        // Optionally, you can listen to events from the spawned process
        process.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        process.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        process.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });

        return process;
    }
};
module.exports = server;
