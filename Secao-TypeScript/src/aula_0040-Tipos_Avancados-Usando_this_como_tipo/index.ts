/* export class Calculator {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public number: number
  ) { }

  addition(number: number): this {
    this.number += number;
    return this;
  }

  subtraction(number: number): this {
    this.number -= number;
    return this;
  }

  multiplication(number: number): this {
    this.number *= number;
    return this;
  }

  division(number: number): this {
    this.number /= number;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(number: number): this {
    this.number **= number;
    return this;
  }
}

const calculator = new SubCalculator(10);
calculator.addition(10).subtraction(10).multiplication(20).division(8).pow(5);

console.log(calculator);
*/

/* Builder - GoF */
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void { console.log(`Enviando dados via '${this.method?.toUpperCase()}' para '${this.url}'`); }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('post').send();

// console.log(request);
