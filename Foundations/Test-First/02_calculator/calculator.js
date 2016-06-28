createCalculator = function(){
    var calculator = {};
    var value = 0;
    calculator.value = function(){return value;};
    calculator.add = function(num){value += num;};
    calculator.subtract = function(num){value -= num;};
    
    return calculator;
};