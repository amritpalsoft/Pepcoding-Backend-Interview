// process.nextTick runs first then setTimeOut and then setImmediate
// setImmediate-->checkHandlers/queue
// setTimeOut-->timer queue
// process.NextTick-->runs before next eventLoop



function add(a,b){
    console.log(a+b);
}

console.log('started');

setTimeout(() => {
 add(2,2)   
});

setImmediate(()=>{
    add(2,3)
})

process.nextTick(()=>{
    add(2,4)
})

console.log('finished');