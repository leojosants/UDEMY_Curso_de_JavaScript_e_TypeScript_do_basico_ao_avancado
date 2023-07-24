type MyType = number;

const arrayNumbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumbers);

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<MyType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));

myPromise().then((result) => console.log(result + 1));
