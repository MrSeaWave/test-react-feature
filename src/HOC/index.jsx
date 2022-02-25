import React,{Component} from 'react';

function HOCWrapper(WrappedComponent) {
  return class extends Component{
    render() {
      return <WrappedComponent name={"HOCWrapper"} {...this.props} />
    }
  }
}

function TestHocPage(props) {
  return <div>TestHocPage
  <p>props: {JSON.stringify(props)}</p>
  </div>
}


export default HOCWrapper(TestHocPage)
