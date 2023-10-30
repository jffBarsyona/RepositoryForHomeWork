const fs = require('fs-extra');

//fs.emptyDirSync('./folder01');
fs.ensureFileSync ('./folder01/file.txt');
//fs.emptyDirSync('./folder02');
fs.moveSync('./folder01/file.txt','./folder02/file.txt');
fs.emptyDirSync('./folder03');
fs.copyFileSync('./folder02/file.txt','./folder03/file.txt');
fs.removeSync('./folder02/file.txt');
fs.removeSync('./folder01');
fs.removeSync('./folder02');
fs.removeSync('./folder03');