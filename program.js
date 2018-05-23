const fs = require('fs');
const Mode = require('stat-mode');
const colors = require('colors');
/*
fs.stat('.img/panda.jpg', (err, stats) => {
    if (err) throw err;
    const mode = new Mode(stats);
    console.log(mode)
    console.log(mode.toString());
});
*/

fs.readFile('./text', 'utf8', (err, data) => {
    if(err) throw err;
    console.log('data before writing: '.yellow, data);
    fs.writeFile('./text', 'some text \n', (err) => {
        if(err) throw err;
        console.log('save'.green)
        fs.readFile('./text', 'utf8', (err,data) => {
            if(err) throw err;
            console.log('date after writing: '.yellow, data);
        });
    });
});
