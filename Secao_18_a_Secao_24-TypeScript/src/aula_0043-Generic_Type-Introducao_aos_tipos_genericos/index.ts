type FilterCallback<U> = (
  // eslint-disable-next-line no-unused-vars
  value: U,

  // eslint-disable-next-line no-unused-vars
  index?: number,

  // eslint-disable-next-line no-unused-vars
  array?: U[],
) => boolean;


export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayFilteredOriginal = array.filter((value) => value < 5);
console.log(arrayFilteredOriginal);

const arrayFiltered = myFilter<number>(array, (value) => value < 5);
console.log(arrayFiltered);
