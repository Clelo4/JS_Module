var t1 = 1;
export var a1 = 1;
export function func1() {
  t1 += 1;
  console.log('ES6 module, func1, ', t1);
};

var a2 = 2;

function func2() {
  t1 += 1;
  console.log('ES6 module, func2, ', t1);
}

export {
  a2,
  func2
};

export function DispalyA1() {
  console.log('a1: ', a1);
}

setTimeout(() => {
  a1 = 'a1 has changed';
  // process.exit(1);
}, 500);