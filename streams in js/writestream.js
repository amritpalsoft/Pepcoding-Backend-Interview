const fs=require('fs');

let data='my name is amrit pal'

let writeStream=fs.createWriteStream('output.txt')

writeStream.write(data,'utf-8');

writeStream.end()

writeStream.on('finish',()=>{
    console.log('writing completed');
})

