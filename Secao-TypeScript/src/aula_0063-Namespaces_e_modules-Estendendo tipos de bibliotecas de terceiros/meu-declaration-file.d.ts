declare namespace _ {
  interface LoDashStatic {
    // eslint-disable-next-line no-unused-vars
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MYGLOBAL: string;
  }
}

declare const global: typeof globalThis & {
  MYGLOBAL: string;
};
