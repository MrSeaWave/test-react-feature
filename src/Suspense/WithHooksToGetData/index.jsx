import React, { useState, useEffect } from 'react';

// https://juejin.cn/post/6844903992485478414
export default function WithHooksToGetData() {
  const { data } = useFetchData('/api/user', fetcher);

  return (
    <div>
      <h2>React Suspense + 自定义Hook开启数据请求新方式。</h2>
      <p>
        原理：
        React发布了Suspense以后，数据请求又有了新思路，我们可以在视图容器的外层包裹一层Suspense，在内部通过向外throw
        Promise的方式告知Suspense我们的组件还没有准备好，需要展示Loading状态。
      </p>
      <span>Hello {data?.name}</span>
    </div>
  );
}

function useFetchData(url, fetcher) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetcher(url)
      .then((result) => {
        setData(result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, fetcher]);

  if (loading) {
    throw Promise.resolve(null);
  } else {
    return { data };
  }
}

function fetcher(url, delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Tom', url });
    }, delay);
  });
}
