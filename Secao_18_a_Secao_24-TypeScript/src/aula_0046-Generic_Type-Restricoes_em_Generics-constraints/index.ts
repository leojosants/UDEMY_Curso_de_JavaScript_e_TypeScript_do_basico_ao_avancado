// eslint-disable-next-line no-unused-vars
type GetKeyFn = <O, K extends keyof O > (object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
  color: 'Preto',
  vaccines: ['A', 'B', 'C'],
}

const vaccines = getKey(animal, 'vaccines');
const color = getKey(animal, 'color');

console.log(vaccines);
console.log(color);
