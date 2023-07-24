export function joinObjects<OT, U>(object0: OT, object1: U): OT & U {
  // return { ...object0, ...object1 };
  return Object.assign({}, object0, object1);
}

const object0 = { key0: 'Valor 0' }
const object1 = { key1: 'Valor 1' }
const union = joinObjects(object0, object1);

console.log(union);
