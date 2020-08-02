import {
  a1,
  a2,
  func1,
  func2,
  DispalyA1
} from './m1.mjs';

console.log(a1);
console.log(a2);
func1();
func2();
DispalyA1();

setTimeout(() => {
  DispalyA1();
}, 1000);