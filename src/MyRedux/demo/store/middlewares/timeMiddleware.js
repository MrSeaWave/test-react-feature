const timeMiddleware = (store) => (next) => (action) => {
  console.group('timeMiddleware');
  console.log('%c Time', 'color:green', +new Date());
  console.log('next fn',next)
  console.groupEnd('timeMiddleware');
  next(action);
  console.log('%c timeMiddleware end','color:green')
};

export default timeMiddleware;
