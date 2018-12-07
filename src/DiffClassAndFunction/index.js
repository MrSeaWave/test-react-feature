import React,{Component} from 'react'
import ReactClass from './ReactClass'
import {ReactArrowFunction,ReactFunction} from './ReacFunction';

class DiffClassAndFunction extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        实例化函数
        {ReactClass.prototype instanceof Component ?'react.class':'no react.class'}
        <br/>
        {ReactArrowFunction.prototype instanceof Component ?'react.class':'箭头函数没有原型'}
        <br/>
        {ReactFunction.prototype instanceof Component ?'react.class':'普通函数不是react.class'}
      </div>
    )
  }
}

export default DiffClassAndFunction
