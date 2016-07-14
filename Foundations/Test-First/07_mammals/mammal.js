var Mammal = function(name){
    this.name = name;
    this.offspring = [];
};

Mammal.prototype.sayHello = function(){
    return `My name is ${this.name}, I'm a Mammal`;
};

Mammal.prototype.haveBaby = function(){
    var baby = new Mammal(`Baby ${this.name}`);
    this.offspring.push(baby);
    return baby;
};

var Cat = function(name, color){
    Mammal.call(this,name)
    this.color = color;
};

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.haveBaby = function(color){
    var baby = new Cat(`Baby ${this.name}`,color);
    this.offspring.push(baby);
    return baby;
};

