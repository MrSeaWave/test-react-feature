import React from 'react';
//父组件用,props是指父组件的props
function renderChildren(props) {
  console.log('renderChildren props', props);
  // 缺少key值
  // return props.children.map((child) => {
  //   if (child.type === RadioOption)
  //     return React.cloneElement(child, {
  //       //把父组件的props.name赋值给每个子组件
  //       name: props.name,
  //     });
  //   else return child;
  // });
  //推荐用 React.Children 遍历所有子组件
  return React.Children.map(props.children, (child) => {
    if (child.type === RadioOption)
      return React.cloneElement(child, {
        //把父组件的props.name赋值给每个子组件
        name: props.name,
      });
    else return child;
  });
}

function RadioOption(props) {
  const { label, value, name } = props;
  return (
    <div>
      label:{label + ' '}
      value:{value + ' '}
      name:{name + ' '}
    </div>
  );
}
//父组件
function RadioGroup(props) {
  return <div>{renderChildren(props)}</div>;
}

// 使用React.Children Api
function ReactChildrenPage() {
  return (
    <RadioGroup name="hello">
      <RadioOption label="选项一" value="1" />
      <RadioOption label="选项二" value="2" />
      <RadioOption label="选项三" value="3" />
    </RadioGroup>
  );
}

export default ReactChildrenPage
