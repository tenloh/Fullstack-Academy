var MyEventEmitter = function(){
    this.events = {};
};

MyEventEmitter.prototype.addListener = function(event, callback){
    if (!this.events[event]){
        this.events[event] = [];
    }
    this.events[event].push(callback);
};

MyEventEmitter.prototype.emit = function(event){
    var args = Array.prototype.slice.call(arguments);
    for (var i=0;i<this.events[event].length;i++){
        this.events[event][i].apply(null, args.slice(1,args.length));         
    };
};

