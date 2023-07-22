"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapStrings = void 0;
function mapStrings(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(item));
    }
    return newArray;
}
exports.mapStrings = mapStrings;
const arrayLetters = ['a', 'b', 'c'];
const arrayLettersMap = mapStrings(arrayLetters, (item) => item.toUpperCase());
console.log(arrayLettersMap);
