const lengthOfLastWord = (s) => {
  let trim_s = s.trim();
  lastword = trim_s.split(" ").at(-1);
  return lastword.trim().length;
};

const lengthOfLastWord2 = (s) => {
  end = s.length - 1;
  while (end > 0 && s[end] === " ") {
    end--;
  }
  beg = end;
  while (beg > 0 && s[beg] !== " ") {
    beg--;
  }
  return end - beg;
};

let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord2(s));
