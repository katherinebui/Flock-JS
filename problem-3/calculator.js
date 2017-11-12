function Calculator(first_num, second_num) {
  this.first_num = first_num;
  this.second_num = second_num;
};

Calculator.prototype.add = function(first_num, second_num) {
  return first_num + second_num;
};

calculator = new Calculator();
console.log(calculator);
console.log(calculator.add(1,2));
