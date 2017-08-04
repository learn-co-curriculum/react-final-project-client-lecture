import {
  createStore, 
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import surfboards from './reducers/surfboards';
import surfboardFormData from './reducers/surfboardFormData';

const reducers = combineReducers({
  surfboards,
  surfboardFormData
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);