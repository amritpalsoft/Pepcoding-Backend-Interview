// when we write a code in JS various things happen in back 
// there is a call-stack, microtask-queue, callback-queue, node/browser api
// all the basic code will initialise in call-stack 
// all set-time-out set-interval and other api provide by node/browser will
// be set in node/browser api queue
// all Promises code will queue in Microtask queue 
// and all Callbacks will queue in callback-queue 

// now we have made queue for each operation but how it will be decide that 
// which code will run first 
// It will be decided by Event-Loop 


// Event Loop will first assign the operations in Microtask-Queue 
// Promise in microtask queue are vip's they are first assigned

// Then Event Loop will assign callback queue 

// Thread Pool: when event manages the  Queues then there are some heavy 
            // tasks which will take time, like network requests so 
            // these operations are not handled by event loop but are
            // send to Thread Pool and when thread pool will completes the 
            // task then event pool will send it to main stack 
            


// Libuv Library of Node js will give both functionality of 
// Event Loop & Thread Pool 