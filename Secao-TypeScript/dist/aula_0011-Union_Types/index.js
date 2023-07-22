"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrConcat = void 0;
function addOrConcat(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    return `${a}${b}`;
}
exports.addOrConcat = addOrConcat;
console.log(addOrConcat(3, 5));
console.log(addOrConcat('a', 'b'));
