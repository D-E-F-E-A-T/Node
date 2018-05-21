const os = require('os');

const release = os.release() //operating system release.
const type = os.type(); //return 'Linux' on Linux, 'Darwin' on macOS and 'Windows_NT' on Windows
const cpus = os.cpus(); // [{}, {}];
const uptime = os.uptime(); //in seconds
const userInfo = os.userInfo();

const getOsInfo = () => {
    process.stdout.write(system() + '\n');
    process.stdout.write('Release: ' + release + '\n');
    process.stdout.write('CPU model: ' + cpus[0].model + '\n')
    process.stdout.write('Time up: ' + upTime() + '\n');
    process.stdout.write('User: ' + userInfo.username + '\n');
    process.stdout.write('Home dir: ' + userInfo.homedir + '\n');
}

const upTime = () => {
    let sec_num = uptime.toFixed(0);
    const hours   = Math.floor(sec_num / 3600);
    const minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    const seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0" + hours;}git
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}
    const time = hours + 'h' + ' : ' + minutes + 'min' + ' : '+ seconds + 'sec';

    return time;
}

const system = () => {
    if(type === 'Darwin') {
        return 'System: ' + 'macOS'
    } else if (type === 'Windows_NT') {
        return 'System: ' + 'Windows'
    } else {
        return 'System: ' + 'Linux'
    }
}

exports.print = getOsInfo;

//module.exports = { print : getOsInfo };
