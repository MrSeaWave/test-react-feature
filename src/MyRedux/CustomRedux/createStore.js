/**
 * createStore
 * - 用来创建 store
 * - 实现了观察者模式
 * - 对 reducer 进行了处理
 * - 默认会首先 dispatch 一次空对象，也就是通过 reducer 生成初始化的数据
 * @param {*} reducer
 */
function createStore(reducer) {
  // 定义 store 对象中的状态信息对象，此处必须是只定义不赋值，因为这样在下面的dispatch初始化state时才能使用默认值初始化state
  let state;
  // listeners 监听器，是一个事件池，存储订阅的方法
  let listeners = [];
  // 在createStore作用域下创建getState函数，该函数需要返回一个新对象，该对象需要和state一样。这个方法只用于获取state
  // 深克隆：将当前作用域下的state深克隆一份，让外界利用这个方法只能获取state不能修改state
  let getState = () => JSON.parse(JSON.stringify(state));

  // 在createStore中有一个订阅方法subscribe，该函数返回取消订阅的函数
  let subscribe = (listener) => {
    listeners.push(listener);
    // 返回取消订阅的方法，当返回值执行时就会取消该订阅
    return () => {
      listeners = listeners.filter((fn) => fn !== listener);
    };
  };

  // 定义修改state的函数dispatch。action中的type一般是const大写的常量
  let dispatch = (action) => {
    // 触发action，使用 reducer 覆盖原来的 state
    state = reducer(state, action);
    // 对所有监听者进行更新操作，在dispatch中执行订阅的方法
    listeners.forEach((listener) => {
      if (typeof listener === 'function') {
        listener();
      }
    });
  };
  //  默认进行一次初始化state
  dispatch({});
  // 返回store对象
  return { getState, dispatch, subscribe };
}

export default createStore
