const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let currentValue = 1;
    let number;

    return {

      next() {
        if (currentValue > max) return { done: true };

        if (currentValue%15 === 0) {
          number = "FizzBuzz";
        } else if (currentValue%3 === 0) {
          number = "Fizz";
        } else if(currentValue%5 === 0) {
          number = "Buzz";
        } else {
          number = currentValue;
        }
        currentValue = currentValue + 1;
        return { done: false, value: number };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}
