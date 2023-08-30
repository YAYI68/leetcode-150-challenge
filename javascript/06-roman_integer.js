const checkRoman = (s) => {
  switch (s) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
};
var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (checkRoman(s[i]) < checkRoman(s[i + 1])) {
      total -= checkRoman(s[i]);
    } else {
      total += checkRoman(s[i]);
    }
  }
  return total + checkRoman(s.slice(-1));
};

let s = "LVIII";
console.log(romanToInt(s));

console.log(checkRoman("M"));
