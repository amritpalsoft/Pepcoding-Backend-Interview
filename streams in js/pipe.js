// pipe method helps us read from one file and write in another file

const fs=require('fs')

let readStream=fs.createReadStream('input.txt');

let writeStream=fs.createWriteStream('output.txt')

readStream.pipe(writeStream)