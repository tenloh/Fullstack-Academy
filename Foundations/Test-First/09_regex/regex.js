var findACount = function(str){
    var count = 0;
    count = (str.match(/a/gi) !== null) ? str.match(/a/gi).length : 0;

    return count;
};

var areaCodeFinder = function(phoneNum){
    var result = 0;
    result = +phoneNum.match(/[0-9][0-9][0-9]/)[0];
    return result;
};

var adjustUrlParameter = function(url,param){
    var result = "";
       
    if (/ID/.test(url) && /ID/.test(param)){
        var oldID = url.match(/id=[0-9]+/i)[0] // 'ID=555'
        result = url.replace(oldID,param)
    } else if (/TYPE/.test(param)){
        result = result + url + '&' + param;
    } else {
        result = result+url+'?'+param; 
    }
    return result;
};

var stringPlusPlus = function(str){
    var result = "";
    var lastChar = str[str.length-1];
    if (/[0-9]/.test(lastChar)){
        var oldNum = str.match(/[0-9]+/)[0];
        var newNum = (+oldNum+1).toString();
        while (newNum.length < oldNum.length){
            newNum = '0'+newNum;
        }
        result = str.replace(oldNum.toString(),newNum.toString())
    } else {
        return str+1;
    }
    return result;
};
