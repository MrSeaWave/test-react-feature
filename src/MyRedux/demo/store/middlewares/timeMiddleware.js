const timeMiddleware = (store) => (next) => (action) => {
  console.group('timeMiddleware');
  console.log('%c Time', 'color:green', +new Date());
  console.groupEnd('timeMiddleware');
  next(action);
};

export default timeMiddleware;
