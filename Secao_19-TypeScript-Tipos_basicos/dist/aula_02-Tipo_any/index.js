"use strict";
// Utilize 'any' apenas em último caso
function showMessage(msg) {
    return msg;
}
console.log(showMessage([1, 2, 3]));
console.log(showMessage('teste'));
console.log(showMessage(1));
