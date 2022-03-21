import { combineReducers } from '../../../CustomRedux';
import themeReducer from './themeReducer';
import countReducer from './countReducer';

export default combineReducers({ themeReducer, countReducer });
