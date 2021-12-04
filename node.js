// NodeJs-->V8-->Machine Code  
//Node Js uses google V8 engine + Libuv Library
//Libuv is written in C++
//Libuv makes NodeJS asynchronous
//NodeJS is single threaded
// Node JS is runtime enviroment for JS

// Whenever our client makes a request, server gives a response. But at a time 
// there may be various requests from different clients so to respond at a faster rate
// multi-threaded server is required.
// So JAVA server and others are multithreaded so no problem

// But in NodeJs, it is Single-Threaded so for to response to different clients 
// it uses thread of the Kernel of the OS 

// So whenever a client makes a request, NodeJs sends it to to Thread of Kernel of
// OS, and whenever Database fulfills the Response, NodeJS sends the response to
// client  

// IO:input output
// Synchronous IO : thread will stop for a process to complete
//                  so if a single threaded process will stop then it cause 
//                  problen

//Asynchronous IO:  thread will not stop for a process to complete, it runs that process in different area
