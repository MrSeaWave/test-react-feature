import React, { useState } from 'react';
function HooksStatePush() {
  let [num, setNums] = useState([0, 1, 2, 3]);
  const test = () => {
    // 这里坑是直接采用push去更新num
    // setNums(num)是无法更新num的
    // 必须使用num = [...num ,1]
    num.push(1);
    // num = [...num ,1]
    setNums(num);
  };
  return (
    <div className="filter">
      <h2>使用useState时候，使用push，pop，splice等直接更改数组对象的坑</h2>
      <button onClick={test}>测试</button>
      <div>
        {num.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default HooksStatePush;
