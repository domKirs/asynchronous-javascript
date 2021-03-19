console.log('🍎 Synchronous 1');

setTimeout(_ => console.log('🥪 Timeout 2'), 0); // Macrotask

Promise.resolve().then(_ => console.log('🍍 Promise 3')); // Microtask

console.log('🍎 Synchronous 4'); 
