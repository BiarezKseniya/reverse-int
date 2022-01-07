module.exports = function reverse (n) {
  let s = '';
  let length;
  n = String(Math.abs(n));
  length = n.length;
  for (let i = 0; i < length; i++) {
      s = `${s}${n[length-1-i]}`;
  }
  return s;
}
