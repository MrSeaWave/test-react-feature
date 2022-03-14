//通过中间件来增强dispatch的功能
import compose from './compose';

function applyMiddleware(...middlewares) {
  return (createStore) =>
    (...args) => {
      // 利用传入的createStore和reducer和创建一个store
      let store = createStore(...args);
      let dispatch;
      let middlewareApi = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args),
      };
      // 让每个 middleware 带着 middlewareAPI 这个参数分别执行一遍
      let chain = middlewares.map((middleware) => middleware(middlewareApi));
      // 接着 compose 将 chain 中的所有匿名函数，组装成一个新的函数，即新的 dispatch
      dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch,
      };
    };
}

export default applyMiddleware;
