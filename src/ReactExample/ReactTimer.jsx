import React, { useState, useEffect } from 'react';

// 数据补零
function zeroPaddingFunc(time) {
  return String(time).padStart(2, '0');
}

const endTime = 24 * 60 * 60;
function ReactTimer() {
  const [remainTime, setRemainTime] = useState(endTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      const val = remainTime - 1 > 0 ? remainTime - 1 : 0;
      setRemainTime(val);
    }, 1000);
    return () => {
      console.log('清楚定时器', timer);
      clearTimeout(timer);
    };
  }, [remainTime]);

  const hh = Math.floor(remainTime / (60 * 60));
  const mm = Math.floor((remainTime - hh * 60 * 60) / 60);
  const ss = remainTime - hh * 60 * 60 - mm * 60;

  return (
    <div>
      <h3>react hooks 实现一个计时器</h3>
      {zeroPaddingFunc(hh)}:{zeroPaddingFunc(mm)}:{zeroPaddingFunc(ss)}
    </div>
  );
}

export default ReactTimer;
