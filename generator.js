const max = process.argv[2];
let FizzBuzz = function*(){
  let currentValue = 1;
  let number;

  while (currentValue <= max) {
    if (currentValue%15 === 0) {
      number = "FizzBuzz";
    } else if (currentValue%3 === 0) {
      number = "Fizz";
    } else if(currentValue%5 === 0) {
      number = "Buzz";
    } else {
      number = currentValue;
    }
    currentValue++;

    yield number;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
