class ErrorReporter {
  private apiKeys: string[];
  constructor(apiKeys: string[]) {
    apiKeys.forEach(apiKey => {
      if (apiKey === undefined || apiKey === '') {
        throw new Error(`apiKey required`);
      }
    });
    this.apiKeys = apiKeys;
  }
  report(err: Error) {
    // could use apiKey here to send error somewhere
  }
}

export { ErrorReporter };
