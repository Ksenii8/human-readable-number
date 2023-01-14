module.exports = function toReadable (number) {
    var str = String(number);
  words = "";
  if (Number(str) === 0) {
    return "zero";
  }

  u = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  t = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  if (str.length === 3) {
    words += u[Number(str[0])]+ " hundred";
    if (Number(str[1]) > 1) {
      if (str.length === 3) words += " "
      words += t[Number(str[1])];
    } 
    if (Number(str[1]) === 1) {
      if (str.length === 3) words += " "
      words += u[Number(str[1]+str[2])];
    } 
    else if (Number(str[2]) > 0) {
      if (str.length === 3) words += " "
      words += u[Number(str[2])];
    }
  }
  else if (str.length === 2) {
    if (Number(str[0]) > 1) {

      words += t[Number(str[0])];
    } 
    if (Number(str[0]) === 1) {

      words += u[Number(str[0]+str[1])];
    } 
    else if (Number(str[1]) > 0) {

      words +=" " + u[Number(str[1])];
    }
  }  
  else if (str.length === 1) {
    words +=u[Number(str[0])];
  }
  
  
  return words;
  
  
}
