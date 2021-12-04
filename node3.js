/* ********************Process Model of Node JS******************** */

// as we know node is a single threaded so it cant stop it thread
// so if multiple requests come to node so it will send it to 
// event queue so that it can happen asychronously without blocking
// its thread and thats why node can handle multiple requests at the same 
// time despite of being single threaded 
// and this is the Process model of Node Js

/* *************************Chaining in Node JS************************ */ 
// when the output of one file is used as a input of second file then it is
// called as chaining 

/*Global in Node JS*/

/*Event Loop*/ 

/**When not to use Node JS */
// we should avoid node js when we have to do CPU intensive task
// i.e. when a program is highly CPU dependent bcz node is single threaded

/*Do Node is completely single threaded*/ 
// yes it is completely single threaded
// it is fast bcz of event loops, callbacks, promises
// i.e. its Asynchronous behaviour
