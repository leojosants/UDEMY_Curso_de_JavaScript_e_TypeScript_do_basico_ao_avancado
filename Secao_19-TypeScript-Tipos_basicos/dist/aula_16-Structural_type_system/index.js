"use strict";
var verifyUser = function (user, sentValue) {
    return user.username === sentValue.username && user.password === sentValue.password;
};
var bdUser = { username: 'Leonardo', password: '123456' };
var sentUser = { username: 'Leonardo', password: '123456' };
var loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
