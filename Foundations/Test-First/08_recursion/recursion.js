var factorialIterative = function(num){
    var result = 1;
    for (var i=1;i<num+1;i++){
        result *= i
    }
    return result;
};

var factorial = function(num){
    if (num===0){
        return 1
    }
   
    return num * factorial(num-1) 
};

var fib = function(num){
    if (num === 0 || num === 1){
        return 1
    }
    
    return fib(num-1)+fib(num-2)
    
}