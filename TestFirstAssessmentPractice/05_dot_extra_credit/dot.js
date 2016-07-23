var dot = function(obj, prop){
    if (obj.hasOwnProperty(prop)){
        return obj[prop];
    } else {
        return dot(Object.getPrototypeOf(obj),prop);
    }
};

var dotCall = function(obj, prop){
    var val = dot(obj,prop);
    if (typeof val !== 'function'){ 
        throw `The property "${prop}" is not a function`;
    };
    
    var args = Array.prototype.slice.call(arguments);
    var result = dot.apply(obj, args)
    return result;
    
};
