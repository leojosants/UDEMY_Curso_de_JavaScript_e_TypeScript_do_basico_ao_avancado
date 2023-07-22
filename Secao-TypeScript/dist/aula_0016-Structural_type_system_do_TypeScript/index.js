"use strict";
const verifyUser = (user, sentValue) => {
    return (user.userName === sentValue.userName && user.password === sentValue.password);
};
const bdUser = { userName: 'João', password: '123456' };
const sentUser = { userName: 'João', password: '123456' };
const loggeIn = verifyUser(bdUser, sentUser);
console.log(loggeIn);
