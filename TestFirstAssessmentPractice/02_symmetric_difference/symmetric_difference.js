var difference = function(arrA,arrB){
    var uniqueToA = arrA.filter(x => arrB.indexOf(x) == -1);
    return uniqueToA;
};

var symmetricDiff = function(A,B){
    var result = [];
    result = result.concat(difference(A,B));
    result = result.concat(difference(B,A));
    return result;
};
