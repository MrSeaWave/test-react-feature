const loggerMiddleware = (store) => (next) => (action) => {
  console.group('loggerMiddleware');
  console.log('store', store);
  console.log('state', store.getState());
  console.log('action', action);
  console.log('next fn', next);
  console.groupEnd('loggerMiddleware');
  next(action);
  console.log('%c loggerMiddleware next state', 'color:green', store.getState());
};

export default loggerMiddleware;
