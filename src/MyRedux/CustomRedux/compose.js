// 提供从右到左进行函数式编程

function compose(...funcs) {
  //  如果没有中间件
  if (!funcs.length) {
    return (arg) => arg;
  }
    //中间件长度为1
  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (prev, next) =>
      (...args) =>
        prev(next(...args))
  );
}

export default compose
