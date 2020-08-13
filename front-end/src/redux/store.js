import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['authReducer'],
    // blacklist: [
    //     'productReducer',
    //     'systemReducer',
    //     'voucherReducer'
    // ],
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(thunk));

export const persistor = persistStore(store);
export default store;