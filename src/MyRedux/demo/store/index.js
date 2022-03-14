import { createStore, applyMiddleware } from '../../CustomRedux';

import reducers from './reducers';
import loggerMiddleware from './middlewares/loggerMiddleware';
import timeMiddleware from './middlewares/timeMiddleware';

export default applyMiddleware(loggerMiddleware, timeMiddleware)(createStore)(reducers);
