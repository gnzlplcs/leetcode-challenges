/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
  let newArray = [];
  s.map(item => newArray.unshift(item))
  newArray.map(item => {
    s.shift();
    s.push(item);
  })
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
