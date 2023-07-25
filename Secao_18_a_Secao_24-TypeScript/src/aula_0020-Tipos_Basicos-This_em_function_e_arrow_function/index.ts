export function func(this: Date, arg1: string): void {
  console.log(`Date: ${this}`);
  console.log(arg1);
}

func.call(new Date(), 'Leonardo');
