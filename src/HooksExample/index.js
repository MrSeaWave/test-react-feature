import React, { Component, useEffect, useState } from 'react';

const HooksExample = () => {
  console.log('render');
  const [count, setCount] = useState(0);

  // 一：必须且推荐在顶层调用，
  // 二：如果不在顶层调用hook，类似下面这种实现方式判断需不需要调用useEffect会出错
  // 三 推荐判定条件写在useEffect里面
  // if(count)
  // useEffect(() => {
  //   // Similar to componentDidMount and componentDidUpdate:
  //   console.log("useEffect1");
  // });
  const [name, setName] = useState({ name: 'my name', otherValue: '2222' });
  // useEffect(() => {
  //   // Similar to componentDidMount and componentDidUpdate:
  //   console.log("useEffect2",);
  // });
  return (
    <div>
      这是：--------
      {count}
      ------
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count
      </button>
      <div>
        测试object
        <input
          style={{ width: 200, height: 50 }}
          value={name.name}
          onChange={e => {
            // otherValue 会被这个数据所覆盖
            setName({ name: e.target.value });
          }}
        />
        <i>
          看看其他的数据：------
          {name.otherValue}
          ------
        </i>
      </div>
    </div>
  );
};
export default HooksExample;
