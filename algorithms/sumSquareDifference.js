/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */

var retrieve = function(key, array){
  var hash = 0;
  for(var i = 0; i < key.length; i++){
    var letter = key[i];
    // (note: this is a standard, uninteresting hashing algorithm)
    hash = hash + Math.pow(hash, letter) % array.length;
  }
  return array[hash];
};

// time complexity- O(1)

var sortedArrayContainsItem = function(array, item){
  var center = Math.floor(array.length / 2);
  if(array[center] === item){
    return true;
  }
  var halfOfArray = item < array[center] ? array.slice(0, center) : array.slice(center);
  return sortedArrayContainsItem(halfOfArray, item);
};

// time complexity- O(2) recursive function

var hasDuplicates = function(array){
  for(var i = 0; i < array.length; i++){
    var item = array[i];
    if(array.slice(i+1).indexOf(item) === -1){
      return true;
    }
  }
  return false;
};

// time complexity- O(1)