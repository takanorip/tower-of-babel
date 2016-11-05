// var sum = function(...args) {
//   return args.reduce((sum, n) => sum + n);
// }
// var array = [1,2,3,4];
// console.log(sum(...array));

// var args = process.argv[2].split(",");
// args = args.map((arg)=> +arg);
//
// var avg = function(...args) {
//   return args.reduce((avg, n) => avg + n) / args.length;
// }
//
// console.log(avg(...args));

var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

function avg(...args){
  return args.reduce((a, b)=>a+b)/args.length;
}

console.log(avg(...args));
