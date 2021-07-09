'use strict';

console.log('Function is loading');
module.exports.handler=(event.a, context, callback)=>{
console.log(event.a);
console.log(event.b);
callback(null,event.a+event.b);
};