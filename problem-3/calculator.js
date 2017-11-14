class Calculator {

  validInput(first_num, second_num) {
    if (Number.isInteger(first_num) && Number.isInteger(second_num)){
      return true;
    } else {
      return false;
    }
  }

  add(first_num, second_num) {
    if (this.validInput(first_num, second_num)) {
      return first_num + second_num;
    } else {
      return null;
    }
  }

  subtract(first_num, second_num) {
    if (this.validInput(first_num, second_num)) {
      return first_num - second_num;
    } else {
      return null;
    }
  }

  multiply(first_num, second_num) {
    if (this.validInput(first_num, second_num)) {
      return first_num * second_num;
    } else {
      return null;
    }
  }

  divide(first_num, second_num) {
    if (this.validInput(first_num, second_num)) {
      return first_num / second_num;
    } else {
      return null;
    }
  }
}

Calc = new Calculator();

console.log(Calc.validInput(2, 3)); // returns true
console.log(Calc.validInput(null, 3)); // returns false

console.log(Calc.add(2, 2)); // returns 4
console.log(Calc.add('e', 9)); // returns null

console.log(Calc.subtract(10, 3)); // returns 7
console.log(Calc.subtract(10, -3)); // returns 13

console.log(Calc.multiply(2, 10)); // returns 20

console.log(Calc.divide(20, 10)); // returns 2
console.log(Calc.divide(null, 10)); // returns null
