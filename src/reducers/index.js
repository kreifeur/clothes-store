// src/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from '../features/Close/close.js';
import menuReducer from '../features/Close/menu.js';
const rootReducer = combineReducers({
  counter: counterReducer,
  menucounter: menuReducer,
  // Add other reducers here
});

export default rootReducer;
