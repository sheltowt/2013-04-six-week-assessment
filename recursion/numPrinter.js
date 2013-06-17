/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */

var printRecursively = function(array){
  console.log(array[0]);
  array.shift();
  if(array.length){
    printRecursively(array);
  }
};

printRecursively([1,2,3,4,45,55]);