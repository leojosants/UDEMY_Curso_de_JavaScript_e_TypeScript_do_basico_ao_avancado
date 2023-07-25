// eslint-disable-next-line no-unused-vars
type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
  userName: string,
  password: string,
};

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.userName === sentValue.userName && user.password === sentValue.password
  );
};

const bdUser = { userName: 'João', password: '123456' };
const sentUser = { userName: 'João', password: '123456' };

const loggeIn = verifyUser(bdUser, sentUser);
console.log(loggeIn);
