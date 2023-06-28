import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import errorReducer from './errorReducer';
import isLoadingReducer from './isLoadingReducer';

const rootReducer = combineReducers({
  form,
  error: errorReducer,
  isLoading: isLoadingReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
