// eslint-disable-next-line no-unused-vars
type MapStringCallback = (item: string) => string;

export function mapStrings(array: string[], callbackfn: MapStringCallback): string[] {

  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const arrayLetters = ['a', 'b', 'c'];
const arrayLettersMap = mapStrings(arrayLetters, (item) => item.toUpperCase());
console.log(arrayLettersMap);
