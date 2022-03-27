import React, { useImperativeHandle, useState } from 'react';

function FuncChildren(props, ref) {
  let [num, setNums] = useState(0);

  // useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。
  // 在大多数情况下，应当避免使用 ref 这样的命令式代码。
  // useImperativeHandle 应当与 forwardRef 一起
  useImperativeHandle(ref, () => ({
    customHandle: () => {
      console.log('自定义方法', num);
    },
  }));

  return (
    <div>
      FuncChildren
      <p>1. 必须使用React.forwardRef(component)包裹使用</p>
      <p>2. useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。</p>
      <button
        onClick={() => {
          setNums(num + 1);
        }}
      >
        num+1
      </button>
    </div>
  );
}

export default React.forwardRef(FuncChildren);
