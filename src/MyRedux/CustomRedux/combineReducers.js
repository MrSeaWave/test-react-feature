export default function combineReducers(reducers) {
  // 返回合并后的新的reducer函数
  return function combination(state = {}, action) {
    // 生成的新的state
    let nextState = {};
    //状态是否改变
    let hasChanged = false;
    // 遍历执行所有的reducers，整合成为一个新的state
    for (let key in reducers) {
      const reducer = reducers[key];
      //之前的 key 的 state
      const previousStateForKey = state[key];
      // 执行 分 reducer，获得新的state
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      //只有所有的 nextStateForKey 均与 previousStateForKey 相等时，hasChanged 的值 false
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    //state 没有改变时，返回原对象
    return hasChanged ? nextState : state;
  };
}
