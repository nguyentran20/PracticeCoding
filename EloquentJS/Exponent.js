function power(base, exponent) {
  if (exponent ==0) {
    return 1;
  } else {
    return base * power(base, exponent -1);
  }
}
console.log(power(2,3));

function zeroPad(number,label) {
  var str = String(number);
  while (str.length < 3) {
    str = "0" + str;
  }
console.log(`${str}:${label}`);
}

function printFarminventory(cow, chicken,pig) {
  zeroPad(cow,"Cow");
  zeroPad(chicken,"Chicken");
  zeroPad(pig,"Pig");
 }
printFarminventory(7,27,127);
