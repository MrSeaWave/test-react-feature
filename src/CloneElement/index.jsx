import React, { useEffect, useState } from 'react';

function TestPage(props) {
  console.log('TestPage props', props);
  const { info } = props;
  useEffect(() => {
    console.log('TestPage Didmount');
  }, []);
  return (
    <>
      <div>TestPage3,{info}</div>
    </>
  );
}

function Wrapper(props) {
  console.log('Wrapper props', props);
  const { children } = props;
  const element = React.cloneElement(children, { info: "I'm in Wrapper" });
  useEffect(() => {
    console.log('Wrapper Didmount');
  }, []);
  return (
    <>
      <div>Wrapper</div>
      {element}
    </>
  );
}

function CloneElementPage(props) {
  const [data, setData] = useState({ name: 1 });
  return (
    <div>
      <button onClick={() => setData({ name: Math.random() })}>click</button>
      <Wrapper data={data}>
        <TestPage />
      </Wrapper>
    </div>
  );
}

export default CloneElementPage;
