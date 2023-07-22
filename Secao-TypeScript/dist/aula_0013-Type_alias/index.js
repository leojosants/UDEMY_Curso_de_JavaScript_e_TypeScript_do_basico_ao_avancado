"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFavouriteColour = void 0;
const person = {
    name: 'Leonardo',
    age: 39,
    remuneration: 5000,
};
function setFavouriteColour(person, color) {
    return Object.assign(Object.assign({}, person), { favouriteColour: color });
}
exports.setFavouriteColour = setFavouriteColour;
console.log(setFavouriteColour(person, 'Blue'));
