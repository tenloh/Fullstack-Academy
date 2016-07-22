var renameFiles = function(arr){
    var resultArr = [];
    
    for (var i=0;i<arr.length;i++){
        var name = arr[i];
        if (resultArr.includes(name)){
            var num = 1;
            var newName = name+`(${num})`;
            while (resultArr.includes(newName)){
                num++;
                newName = name+`(${num})`;
            }
            resultArr.push(newName);
        } 
        else {
            resultArr.push(name);
        }
    }
    return resultArr;
};
