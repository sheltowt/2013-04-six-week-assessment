/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */

var each = function(object, iterator){
  if(Array.isArray(object)){
    for(var i = 0; i < object.length; i++){
      iterator(object[i]);
    };
  }
  else if(object instanceof Object == true){
    for(var key in object){
      iterator(object[key]);
    }
  }
  else if(object instanceof String == true){
    object = object.splice('');
      for(var i = 0; i < object.length; i++){
        iterator(object[i]);
      }
  }
  return object;
};

var printAll = function(thing){
  console.log(thing);
};

each([1,2,3,4], printAll);



var filter = function(object, test){
  if(Array.isArray(object)){
    returnValue = [];
    for(var i = 0; i < object.length; i++){
      if(test(object[i])){
        returnValue.push(object[i]);
      };
    };
  }
  else if(object instanceof Object == true){
    returnValue = [];
    for(var key in object){
      if(test(object[i])){
        returnValue.push(object[i]);
      };
    }
  }
  else if(object instanceof String == true){
    object = object.splice('');
    returnValue = [];
      for(var i = 0; i < object.length; i++){
        if(test(object[i])){
          returnValue.push(object[i]);
        };
      }
  }
  return returnValue;
};

var isOdd = function(number){
  return number % 2;
};

filter([1,2,3,4,5,6], isOdd);

