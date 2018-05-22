const osInfo = require('./OS');
const colors = require('colors');
const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();

emitter.on('beforeCommand', (instruction) => {
    console.log('You wrote: ' + instruction + ' trying to run');
});

emitter.on('afterCommand', () => {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
    const input = process.stdin.read();

    if(input !== null) {
        const instruction = input.toString().trim();
        emitter.emit('beforeCommand', colors.red(instruction));

        switch(instruction) {
            case '/osInfo':
                osInfo.print();
                break;
            case '/node':
                process.stdout.write(process.versions.node + '\n');
                break;
            case '/lang':
                process.stdout.write(process.env.LANG + '\n');
                break;
            case '/exit':
               process.stdout.write('Quitting app! \n');
               process.exit();
               break;
            default:
                process.stderr.write('Wrong instruction \n')
        }
        emitter.emit('afterCommand');
    }
});
