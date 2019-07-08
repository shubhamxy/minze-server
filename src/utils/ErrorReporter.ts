class ErrorReporter {
  private keys: { [key: string]: string };
  constructor(keys: { [key: string]: string }) {
    Object.keys(keys).forEach(key => {
      if (keys[key] === undefined || keys[key] === '') {
        throw new Error(`${key} : key required`);
      }
    });
    this.keys = keys;
  }
  report(err?: Error) {
    console.log(this.keys);
  }
}

export { ErrorReporter };
