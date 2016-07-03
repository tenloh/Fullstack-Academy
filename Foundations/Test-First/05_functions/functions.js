// Functions.js
var concatString = function(){
    var argsArr = Array.prototype.slice.call(arguments);
    var result = argsArr.join('');
    return result;
};

var yourFunctionRunner = function(callThisFunc){
    var argsArr = Array.prototype.slice.call(arguments);
    var result = "";
    for (var i=0;i<argsArr.length;i++){
        result = result.concat(argsArr[i]())
    }
    return result;
};

/*
var makeAdder = function(A){
    
    var adderOf2Function = function(B){
        return A+B;
    }
    
    return adderOf2Function;
};

*/

var makeAdder = function(A){
    var resultObj = {};
    resultObj[`adderOf${A}function`] = function(B){
        return A+B;
    };
    
    return resultObj[`adderOf${A}function`];
};


var once = function(x){
    var timesRan = 0;
    return function (){
        if (timesRan===0){
            timesRan += 1
            x();
        } 
    } 
};

var createObjectWithClosures = function(){
    var value = 0;
    var resultObj = {};
    resultObj.oneIncrementer = function(){value += 1};
    resultObj.tensIncrementer = function(){value += 10};
    resultObj.getValue = function(){return value};
    return resultObj;
};