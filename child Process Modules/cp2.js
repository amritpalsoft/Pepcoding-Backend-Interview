// it takes input file and gives its output in our result
// this is used to run different languages output in our node files

const cp=require('child_process')

let output=cp.execSync('node input.js')

console.log(`output is ${output}`);