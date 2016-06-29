var RPNCalculator = function(){
    this.total = 0;
    this.stack = [];
    this.push = function(x){this.stack.push(x)};
    this.plus = function(){
        for (var i=0;i<this.stack.length;i++){
            this.total += this.stack.pop()
        }
    };
    this.value = function(){return this.total;};
};