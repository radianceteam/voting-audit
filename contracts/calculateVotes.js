let y = 3;
let n = 2;
let t = 5;

// Vote count model selector
// Majority = 0;
// SoftMajority = 1;
// SuperMajority = 2;
function calculateVotes(yes, no, total, selector)  {
  let passed = false;
  if (selector == 0) {
    passed = (yes > no);
  } else if (selector == 1) {
    passed = (yes * total * 10 >= total * total + no * (8 * total  + 20));
  } else if (selector == 2) {
    passed = (yes * total * 3 >= total * total + no * (total + 6));
  }
  return passed;
}

console.log('Majority vcm result: ', calculateVotes(y, n, t, 0));
console.log('SoftMajority vcm result: ', calculateVotes(y, n, t, 1));
console.log('SuperMajority vcm result: ', calculateVotes(y, n, t, 2));
