// Utilize 'any' apenas em último caso
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage(1));
console.log(showMessage('a'));
console.log(showMessage(['a', 'b', 'c']));
