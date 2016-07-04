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
