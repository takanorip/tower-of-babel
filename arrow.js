// var inputs = process.argv.slice(2);
// var texts = [];
// var result = inputs.map((input)=> {
//   var ini = input.substr(0, 1);
//   texts.push(ini);
// })
// .reduce(() => {
//   var res = texts.join('');
//   return res;
// });
// console.log(result);

var inputs = process.argv.slice(2);
var result = inputs.map((x) => x[0]).reduce((result, x) => result += x);

console.log(result);
