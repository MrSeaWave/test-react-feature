import React,{Component,PureComponent} from 'react'

class PureComponentTest extends PureComponent{
  constructor(props){
    super(props)
    this.state={
      count:1
    }
  }

  shouldComponentUpdate(nextProps,nextState) {
    // 加上之后没有什么太大的影响，只是浏览器上会warning，此方法依然能用
    return true
  }
  render(){
    const {count}=this.state
    return(
      <div>
        <button onClick={()=>{
          this.setState({count:count+1})
        }}>在pureComponent里加入shouldComponentUpdate</button>
        <i>{count}</i>
      </div>
    )
  }
}
export default PureComponentTest
