["log","info", "warn", "error"].forEach(function(method) {
  //@ts-ignore
  let oldMethod = console[method].bind(console);
  // @ts-ignore
  console[method] = function() {
      oldMethod.apply(
          // @ts-ignore
          [new Date()].concat(...arguments)
      );
  };
});
