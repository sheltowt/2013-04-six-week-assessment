/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */

var storage = [1,3,4,5,6];

var queue = {

  add: function(element){
    storage.push(element);
  },

  remove: function(){
    storage.shift();
  }
};

