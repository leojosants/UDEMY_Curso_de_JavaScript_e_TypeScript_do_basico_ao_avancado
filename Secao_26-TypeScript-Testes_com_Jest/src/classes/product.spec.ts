import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
}

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut('Camiseta', 49.90);

    expect(sut).toHaveProperty('name', 'Camiseta');

    expect(sut.price).toBeCloseTo(49.90);
  });
});

/*
  SUT - System under test
  A nomenclatura 'sut' é utilizada para referenciar uma classe em teste
*/
