import React, { Component } from 'react';
import { connect } from '../../ReactRedux';

class ColorPanel extends Component {
  _changeColor = (color) => () => {
    const { changeColor } = this.props;
    changeColor(color);
  };

  render() {
    const { themeColor } = this.props;
    console.log('this.props', this.props);
    return (
      <div>
        <div id="header">标题</div>
        <div id="main">
          <div id="content" style={{ color: themeColor }}>
            大家好，我是内容
          </div>
          <button onClick={this._changeColor('blue')}>Blue</button>
          <button onClick={this._changeColor('pink')}>Pink</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => store;
const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: (color) => {
      return dispatch({ type: 'CHANGE_COLOR', color });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPanel);
