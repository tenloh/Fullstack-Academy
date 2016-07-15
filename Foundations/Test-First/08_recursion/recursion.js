var factorialIterative = function(num){
    var result = 1;
    for (var i=1;i<num+1;i++){
        result *= i
    }
    return result;
};

var factorial = function(num){
    if (num===0){
        return 1;
    }
    return num * factorial(num-1) ;
};

var fib = function(num){
    if (num === 0 || num === 1){
        return 1;
    }
    return fib(num-1)+fib(num-2);
};

var type = function(obj){
    var result = "";
    result = Object.prototype.toString.call(obj);
    result = result.slice(8,-1);
    return result;
};

var stringify = function(obj){
    if (type(obj)==="Undefined"){return 'undefined'}
    else if (type(obj)==="String"){return `"${obj}"`}
    else if (type(obj)==="Null"){return 'null'}
    else if (type(obj)==="Array"){
        return "["+ obj.map(x => stringify(x)).join(",") +"]";
    }
    else if (type(obj)==="Object"){
        var resultArr = [];
        for (var prop in obj){
            var newValue = stringify(obj[prop]);
            resultArr.push(`"${prop}": ${newValue}`);
        }
       return "{"+ resultArr.join(",") + "}"  ;
    }
    else {return `${obj}`};
};
