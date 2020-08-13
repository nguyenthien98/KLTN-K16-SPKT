import { combineReducers } from 'redux';

import authReducer from './auth.reducer';

const reducers = {
    authReducer
}

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;