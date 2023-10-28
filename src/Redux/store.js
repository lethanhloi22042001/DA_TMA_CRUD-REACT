import {applyMiddleware} from 'redux'
// import {createStore ,applyMiddleware} from 'redux'
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Redux/reducers/rootReducer'

import { persistStore, persistReducer } from 'redux-persist'

const store = createStore(rootReducer, applyMiddleware(thunk));

export const dispatch = store.dispatch;

const persistor = persistStore(store);

export  {store,persistor} ;


// Tạo 1 Store (rootReducer)=> tạo nó createStore(rootReducer)