console.log('utils.js is running');

const square = (x) => x * x ;

const addition = (x) => x + x;

const subtract  = (a, b) => a - b ;

console.log('this is from utils.js',addition(20),square(100));
export { square, addition ,subtract as default }; //named export 
