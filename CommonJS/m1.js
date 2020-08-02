var a1 = 1;
var a2 = 2;
var a3 = 3;

module.exports = {
  a1: a1,
  a2: a2,
  func1: function func1() {
    console.log('func1, ', a1);
  },
  func2: func2,
  a3
};

function func2() {
  console.log('func2, ', a2);
}