var Mammal = function(name){
    this.name = name;
    this.offspring = [];
}

Mammal.prototype.sayHello = function(){
    return `My name is ${this.name}, I'm a Mammal`;
}

Mammal.prototype.haveBaby = function(){
    var baby = Object.create(this)
}
