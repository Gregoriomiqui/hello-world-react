//Dependencies
import { combineReducers } from 'redux';

// Shared Reducers
import device from  './deviceReducer';


//Apps Reducers
import library from '../containers/Library/reducer';

const rootReducer= combineReducers({
  device,
  library
});

export default rootReducer;
