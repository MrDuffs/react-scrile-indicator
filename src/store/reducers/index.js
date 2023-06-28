import { combineReducers } from 'redux';
import { targetIndicatorReducer } from './target-indicator';

const rootReducer = combineReducers({
  indicatorValues: targetIndicatorReducer,
});

export default rootReducer;
