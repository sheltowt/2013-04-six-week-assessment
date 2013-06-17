/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */

var stringReverse = function(string){
  string = string.split('');
  newString = '';
  console.log(string);
  for(var i = string.length -1; i >= 0; i--){
    newString = newString + string[i];
  }
  return newString;
};

stringReverse("hellooeoeoe");

var stringReverse = function(number){
  number = number.toString();
  number = number.split('');
  console.log(number);
  sum = 0;
  for(var i = 0; i < number.length; i++){
    if(parseInt(number[i]) % 2 === 0){
      sum = sum + parseInt(number[i]);
    };
  }
  console.log(sum);
};

stringReverse(345345345345);