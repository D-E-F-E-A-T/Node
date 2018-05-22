const os = require('os');
const colors = require('colors');


 const getOsInfo = () => {
    const release = os.release() //operating system release.
    const type = os.type(); //return 'Linux' on Linux, 'Darwin' on macOS and 'Windows_NT' on Windows
    const cpus = os.cpus(); // [{}, {}];
    const uptime = os.uptime(); //in seconds
    const userInfo = os.userInfo();

    process.stdout.write(colors.grey(system(type)) + '\n');
    process.stdout.write(colors.red('Release: ') + release + '\n');
    process.stdout.write(colors.magenta('CPU model: ') + cpus[0].model + '\n')
    process.stdout.write(colors.green('Time up: ') + upTime(uptime) + '\n');
    process.stdout.write(colors.yellow('User: ') + userInfo.username + '\n');
    process.stdout.write(colors.cyan('Home dir: ') + userInfo.homedir + '\n');
}

const system = (type) => {
    if(type === 'Darwin') {
        return 'System: ' + 'macOS'
    } else if (type === 'Windows_NT') {
        return 'System: ' + 'Windows'
    } else {
        return 'System: ' + 'Linux'
    }
}

const upTime = (uptime) => {
    let sec_num = uptime.toFixed(0);
    const hours   = Math.floor(sec_num / 3600);
    const minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    const seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}
    const time = hours + 'h' + ' : ' + minutes + 'min' + ' : '+ seconds + 'sec';

    return time;
}


exports.print = getOsInfo;

//module.exports = { print : getOsInfo };
