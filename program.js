const os = require('os');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
    const input = process.stdin.read();
    console.log(os)
    if(input !== null) {
        const instruction = input.toString().trim();
        switch(instruction) {
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
    }
});
