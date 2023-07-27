import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
}

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have noDiscount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.50)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});

/*
  SUT - System under test
  A nomenclatura 'sut' é utilizada para referenciar uma classe em teste
*/
