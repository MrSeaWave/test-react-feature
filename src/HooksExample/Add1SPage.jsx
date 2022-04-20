import React, { useEffect, useState } from 'react';

function Add1SPage(props) {
  const [num, setNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNumber(num + 1);
    }, 1000);
  }, [num]);

  return (
    <div>
      <h2>hooks 每秒+1</h2>
      <span>nums: {num}</span>
    </div>
  );
}

export default Add1SPage;
