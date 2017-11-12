class Calculator {
  constructor(first_num, second_num) {
    this.first_num = first_num;
    this.second_num = second_num;
  }

  add(first_num, second_num) {
    return first_num + second_num;
  }

  subtract(first_num, second_num) {
    return first_num - second_num;
  }

  multiply(first_num, second_num) {
    return first_num * second_num;
  }

  divide(first_num, second_num) {
    if (first_num / second_num == 0) {
      return null;
    } else {
      return first_num / second_num;
    }
  }
}

Calc = new Calculator();
console.log(Calc.add(2, 2)); // returns 4

console.log(Calc.subtract(10, 3)); // returns 7
console.log(Calc.subtract(10, -3)); // returns 13

console.log(Calc.multiply(2, 10)); // returns 20

console.log(Calc.divide(20, 10)); // returns 2
console.log(Calc.divide(null, 10)); // returns null
