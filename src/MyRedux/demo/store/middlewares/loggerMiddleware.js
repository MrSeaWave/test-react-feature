const loggerMiddleware = (store) => (next) => (action) => {
  console.group("loggerMiddleware")
  console.log('store', store);
  console.log('state', store.getState());
  console.log('action', action);
  console.groupEnd("loggerMiddleware")
  next(action);
  console.log('loggerMiddleware next state', store.getState());
}

export default loggerMiddleware;
