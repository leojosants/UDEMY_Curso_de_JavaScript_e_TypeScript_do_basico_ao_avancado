type Age = number;

type Person = {
  name: string,
  age: Age,
  remuneration: number,
  favouriteColour?: string
}

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type FavouriteColour = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'Leonardo',
  age: 39,
  remuneration: 5000,
};

export function setFavouriteColour(person: Person, color: FavouriteColour): Person {
  return { ...person, favouriteColour: color };
}

console.log(setFavouriteColour(person, 'Blue'));
