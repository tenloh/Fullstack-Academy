var doubler = function(x){return x*2};

var map = function(arr,func){
    var newArr = [];
    for (var i=0;i<arr.length;i++){
        newArr.push(func(arr[i]));
    }
    return newArr;
};

var filter = function(arr,func){
    var newArr = [];
    for (var i=0;i<arr.length;i++){
        if (func(arr[i])){
            newArr.push(arr[i]);
        }
    };
    return newArr;
};

var contains = function(collection,val){
    var doesContain = false;
    for (var i in collection){
        if (collection[i]===val){
            doesContain = true;
        }
    }
    return doesContain;
};

var countWords = function(str){
    var wordArr = str.split(" ");
    return wordArr.length;
};

var reduce = function(arr, start, func){
    var current = start;
    for (var i=current;i<arr.length;i++){
        current = func(current, arr[i]);
    }
    return current;
};

var countWordsInReduce = function(current,str){
    return current + countWords(str);
};

var sum = function(arr){
    var func = function(a,b){return a+b};
    var total = reduce(arr,0,func);
    return total;
};

var every = function(arr, func){
    var num = 0;
    var everyReduce = function(current, element){
        if (func(element)){
            num += 1
        }; 
        return num;
    };
    
    if (reduce(arr,0,everyReduce) === arr.length){
        return true
    } else {
        return false;
    };
};

var any = function(arr,func){
    var num = 0;
    var anyReduce = function(current, element){
        if (func(element)){num +=1}
        return num;
    }
    if (reduce(arr,0,anyReduce) > 0){
        return true
    } else {
        return false
    }
};
