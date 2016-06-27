var setPropertiesOnObjLiteral = function(obj){
    obj.x = 7;
    obj.y = 8;
    obj.onePlus = function(n){return n+1};
    return obj;
};

var setPropertiesOnArrayObj = function(arrayObject){
    arrayObject.hello = function(){return "Hello!"};
    arrayObject['full'] = 'stack';
    arrayObject[0] = 5;
    arrayObject.twoTimes = function(x){return x*2}
};

var setPropertiesOnFunctionObj = function(functionObject){
    functionObject.year = 2015;
    functionObject.divideByTwo = function(n){return n/2;}
    functionObject.prototype.helloWorld = function(){return "Hello World"}
}