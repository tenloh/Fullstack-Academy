// dot(testObj,testProp)
var dot = function(obj, prop){
    if (obj.hasOwnProperty(prop)){
        return obj[prop];
    } else {
        return dot(Object.getPrototypeOf(obj),prop);
    }
};

var dotcall = function(obj, prop){
    var args = Array.prototype.slice.call(arguments);
    var val = dot(obj,prop);
    
    if (typeof val !== 'function'){ 
        throw `The property ${prop} is not a function`;
    }
    var result = Function.protoype.apply(obj, args)
    return result;
};
