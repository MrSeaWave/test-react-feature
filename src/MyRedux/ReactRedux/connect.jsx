import React, { Component } from 'react';
import { ReduxContext } from './context';

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  return class extends Component {
    // https://zh-hans.reactjs.org/docs/context.html#classcontexttype
    // 挂载在 class 上的 contextType 属性可以赋值为由 React.createContext() 创建的 Context 对象。
    //此属性可以让你使用 this.context 来获取最近 Context 上的值。
    //你可以在任何生命周期中访问到它，包括 render 函数中。
    static contextType = ReduxContext;
    constructor(props) {
      super(props);
      this.state = {
        allProps: {},
      };
    }

    componentWillMount() {
      // 从上下文中获取 store 该 store 是从根组件传递过来的
      const { store } = this.context;
      this._updateProps(); // 初始化执行一次 updateProps
      store.subscribe(() => this._updateProps()); // 加入观察者
    }

    // 执行action后更新props，使组件可以更新至最新状态（类似于setState）
    _updateProps = () => {
      const { store } = this.context;
      // 主要用来进行 store 的 state 的获取
      const stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {};
      // 用来 dispatch 的时候获取 store 的 dispatch
      const dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {};
      // 整合普通的 props 和 从 state 生成的 props
      // 作为完整的 state 返回，这样在子组件中就能够通过 props 获取内容
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props,
        },
      });
    };
    render() {
      return <WrappedComponent {...this.state.allProps} />;
    }
  };
};
