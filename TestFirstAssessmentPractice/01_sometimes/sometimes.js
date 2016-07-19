var sometimes = function(func){
    var timesRan = 0;
    var newFunc = function(){
        timesRan++;
        if (timesRan < 4 || timesRan %2 !== 0){
            return func.apply(null,arguments);
        } 
        else {
            return 'I do not know!'
        }
    };
    
    return newFunc;
};
