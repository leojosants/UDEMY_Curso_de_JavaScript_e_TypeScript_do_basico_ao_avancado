type Veiculo = {
  marca: string,
  ano: number,
}

type Car = {
  brand: Veiculo['marca'],
  year: Veiculo['ano'],
  name: string,
}

const car: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'F-250'
}

console.log(car);
