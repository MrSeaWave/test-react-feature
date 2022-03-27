import React, { Component } from 'react';
import ClassChildren from './ClassChildren';
import FuncChildren from './FuncChildren';

class RefPage extends Component {
  classRef = React.createRef();
  funcRef = React.createRef();
  render() {
    return (
      <div>
        使用Ref 访问 React元素
        <div>
          <button
            onClick={() => {
              console.log('classRef', this.classRef);
              console.log('funcRef', this.funcRef);
            }}
          >
            console.log(ref)
          </button>
           <button
            onClick={() => {
              this.classRef.current.onClassClick()
              this.funcRef.current.customHandle()
            }}
          >
            use this.classRef this.funcRef
          </button>
        </div>
        <h3>使用ref 访问class</h3>
        <ClassChildren ref={this.classRef} />
        <h3>使用ref 访问 func</h3>
        <FuncChildren ref={this.funcRef} />
      </div>
    );
  }
}

export default RefPage;
