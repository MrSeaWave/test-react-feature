/**
 * themeReducer
 * @param {*} state
 * @param {*} action
 */
function themeReducer(state, action) {
  // 默认 color red
  if (!state) {
    return { themeColor: 'red' };
  }
  // 现在只写了一个 action
  switch (action.type) {
    case 'CHANGE_COLOR':
      console.log('触发数据', state, action);
      return {
        ...state,
        themeColor: action.color,
      };
    default:
      return state;
  }
}

export default themeReducer;
