module.exports = dontPadMeBro;


function dontPadMeBro(str, len, direction){

str = String(str);
len = Number(len);
ch = " ";


if(direction == 'left'){
var paddedString = ch.repeat(len) + str;
// console.log(paddedString);
}
else if (direction === 'right') {
  var paddedString = str + ch.repeat(len);
}
else
{
  console.log("Direction is invalid.  Input 'left' or 'right'");
}
console.log(paddedString);
};
