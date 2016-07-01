var repeat = function(x,times){
    var result = '';
    for (var i=0;i<times;i++){
        result = result.concat(x);
    }
    return result;
}


var sum = function(arr){
    var result = 0;
    for (var i=0;i<arr.length;i++){
        result = result + arr[i];
    }
    return result
}


var gridGenerator = function(x){
    var grid = "";
    for (var i=0;i<x;i++){
        for (var j=0;j<x;j++){
            if (i%2===j%2){grid = grid.concat("#")}
            else {grid = grid.concat(" ")}
        }
        grid = grid.concat('\n')
    }
    return grid;
}

var join = function(arr,delimiter){
    var result = "";
    var delim = delimiter || "";
    for (var i=0;i<arr.length;i++){
        result = result.concat(arr[i])
        if (i < arr.length-1){result = result.concat(delim)}
    }
    
    return result;
};


var paramify = function(obj){
    var result = "";
    for (var i in obj){
        var rewrite = `${i}=${obj[i]}`
        result = result.concat(rewrite)
    }
    return result;
}
