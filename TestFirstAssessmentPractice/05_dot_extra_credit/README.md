## dot

The dot operator in javascript is used to access a property on an object.  In this series of exercises you will re-create the
`.` operator. Your version won't call the `.` operator on an object, it will be a function that accepts an object, and the property
you want to access on that object (or in the objects prototype chain).

Here are a few examples:

```
INPUT: dot({hello: function(){return 'hello world'}, 'hello');
OUTPUT: function(){return 'hello world'}

INPUT: dot({}, 'toString');
OUTPUT: Object.prototype.toString  (returns the toString function)

INPUT: dot({hello: function(){return 'hello world'},'toString');
OUTPUT: Object.prototype.toString  (returns the toString function)
```



## dotCall

`dotCall` is an extension of the `dot` function.  In this exercise, the goal is to re-create the call method (using the `Function.prototype.apply`).

`dotCall` will accept an object, a property name, and additional arguments that belong to a function.

First, you will call the `dot` function from the previous exercise and get the value based off of the object passed and property, ideally, this will be a `function`.  After, use `Function.prototype.apply` on the function returned from `dot` and pass the function additional arguments using the arguments variable.  Return the result of the function.

```
var obj = {
  sayHello: function(name){return 'Hi ' + name + '!'},
  sayBye: function(name){return 'Bye ' + name + '!'}
}

INPUT: dotCall(obj, 'sayHello', "David")
OUTPUT: "Hi David!";

INPUT: dotCall(obj, 'sayBye', "Nimit");
OUTPUT: 'Bye Nimit!';
```
