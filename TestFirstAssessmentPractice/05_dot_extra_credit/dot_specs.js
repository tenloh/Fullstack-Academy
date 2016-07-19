describe('dot', function(){

  it('returns all data types', function(){
    var exampleObj = {
      arr: [],
      obj: {},
      str: 'string',
      num: 22,
      boolean: false,
      undeFined: undefined,
      nullValue: null
    }
    expect(Array.isArray(dot(exampleObj, "arr"))).toEqual(true);
    expect(typeof dot(exampleObj, "obj")).toEqual('object');
    expect(typeof dot(exampleObj, "str")).toEqual('string');
    expect(typeof dot(exampleObj, "num")).toEqual('number');
    expect(typeof dot(exampleObj, "undeFined")).toEqual('undefined');
    expect(Object.prototype.toString.call(dot(exampleObj, "nullValue")).slice(8,-1)).toEqual('Null');
    expect(typeof dot(exampleObj, "boolean")).toEqual('boolean');
  });

  it('accepts an object and a property name on the object, it returns the value assigned to the property', function(){
    var city = {
      name: "New York",
      boroughs: ['Manhattan', 'Bronx', 'Queens', 'Brooklyn', 'Staten Island'],
      population: 8491079
    }
    expect(dot(city, "name")).toEqual("New York");
    expect(dot(city, "boroughs")).toEqual(['Manhattan', 'Bronx', 'Queens', 'Brooklyn', 'Staten Island']);
    expect(dot(city, "population")).toEqual(8491079);
  });

  it('calls the Object.getPrototypeOf and Object.prototype.hasOwnProperty methods', function(){
    spyOn(Object,'getPrototypeOf').and.callThrough();
    spyOn(Object.prototype,'hasOwnProperty').and.callThrough();

    dot({}, 'toString');
    expect(Object.getPrototypeOf).toHaveBeenCalled();
    expect(Object.prototype.hasOwnProperty).toHaveBeenCalled();
  });

  it('recursively finds properties in its prototype chain', function(){

    
    spyOn(window,'dot').and.callThrough();  
    
    
    var FrameWork = function(name, createdBy, version){
      this.isFramework = true,
      this.createdBy = createdBy,
      this.currentVersion = version
    }
    FrameWork.prototype.type = function(type){
      return type;
    }
    var angular = new FrameWork('Angular', "Google", 1.5);

    expect(dot(angular, "type")).toEqual(FrameWork.prototype.type);
    expect(window.dot.calls.count()).toEqual(2);  

    window.dot.calls.reset();


    expect(dot(angular, 'toString')).toEqual(Object.prototype.toString);
    expect(window.dot.calls.count()).toEqual(3);
    
  });
});

describe('dotCall', function(){
  var names;
  beforeEach(function(){
    spyOn(window, 'dot').and.callThrough();
    spyOn(dot, 'apply').and.callThrough();

    names = {
      nimit: 'Nimit',
      sayName: function(name){
        return 'My name is ' + this[name] + ".";
      },
      shoutName: function(name){
        return 'I AM ' + this[name].toUpperCase() + "!"
      }
    }

  });

/* The "Function.prototype.call" accepts a "context object" and arguments the function its called on accepts.

          EXAMPLE: someFunction.call(contextObject, arg1, arg2, arg3)

  dotCall(object, prop, args) accepts an object and a property.  The value located at the property must be a function.  After the object
  and property arguments, the dotCall method accepts the arguments the function normally accepts.

  Use the "dot" function created in the first steps to find t he function object located at the object and property passed to dotCall.  Then,
  use the `apply` method on the function found and mimic `.call` with ``.apply` .

*/

  it('pass dotCall an object, a property, and additional arguments the function accepts', function(){
    // console.log(names.sayName);
    expect(dotCall(names, "sayName", 'nimit')).toEqual('My name is Nimit.')
  });

  it("uses `.apply` and the `dot` function", function(){
    expect(dotCall(names, "shoutName", 'nimit')).toEqual("I AM NIMIT!");
  });

  it('uses "throw" if the value found at the property is not a function', function(){
    expect(function(){ dotCall(names, "nimit")}).toThrow('The property "nimit" is not a function');
  })

})
