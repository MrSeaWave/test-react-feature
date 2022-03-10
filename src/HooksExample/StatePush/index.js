import React, { useState } from 'react';
import HooksStatePush from './HooksStatePush';
import ClassStatePush from './ClassStatePush';

function Index(props) {
  const [type, setType] = useState('hooks');
  const onClick = () => {
    setType(type === 'hooks' ? 'class' : 'hooks');
  };
  return (
    <div>
      <button onClick={onClick}>{type}页面</button>
      {type === 'hooks' ? <HooksStatePush /> : <ClassStatePush />}
    </div>
  );
}

export default Index;
