var RPNCalculator = function(){
    this.stack = [];
};

RPNCalculator.prototype.push = function(x){
    this.stack.push(x);
};

RPNCalculator.prototype.plus = function(){
    if (this.stack.length < 2){
        throw "rpnCalculator is empty"
    } else {
        var operand1 = this.stack.pop();
        var operand2 = this.stack.pop();
        var result = operand2 + operand1;
        this.stack.push(result);
    }
};

RPNCalculator.prototype.minus = function(){
    if (this.stack.length < 2){
        throw "rpnCalculator is empty"
    } else {
        var operand1 = this.stack.pop();
        var operand2 = this.stack.pop();
        var result = operand2 - operand1;
        this.stack.push(result);
    }
};

RPNCalculator.prototype.divide = function(){
    if (this.stack.length < 2){
        throw "rpnCalculator is empty"
    } else { 
        var operand1 = this.stack.pop();
        var operand2 = this.stack.pop();
        var result = operand2 / operand1;
        this.stack.push(result);
    }
}

RPNCalculator.prototype.times = function(){
    if (this.stack.length < 2){
        throw "rpnCalculator is empty"
    } else {
        var operand1 = this.stack.pop();
        var operand2 = this.stack.pop();
        var result = operand2 * operand1;
        this.stack.push(result);
    }
}

RPNCalculator.prototype.value = function(){
    return this.stack[this.stack.length-1];
};
