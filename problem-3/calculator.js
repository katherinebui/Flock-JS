function Calculator(first_num, second_num) {
  this.first_num = first_num;
  this.second_num = second_num;
};

Calculator.prototype.add = function(first_num, second_num) {
  return first_num + second_num;
};

Calculator.prototype.subtract = function(first_num, second_num) {
  return first_num - second_num;
};

Calculator.prototype.multiple = function(first_num, second_num) {
  return first_num * second_num;
};

Calculator.prototype.divide = function(first_num, second_num) {
  return first_num/second_num;
};

calculator = new Calculator();
// console.log(calculator);
// console.log(calculator.add(1,2));
console.log(calculator.subtract(7,2));
console.log(calculator.multiple(4,6));
console.log(calculator.divide(22,11))
