import {createStore ,applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import rootReducer from '../Redux/reducers/rootReducer'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// Store chứa tất cả các thông tin trạng thái(state) của ứng dụng.
const persistConfig = {
    // key: 'root TMA', // key trong local storage (có thể đặt tùy ý)
    storage,
    stateReconciler: autoMergeLevel2,
  };
  const userPersistConfigStore = {
    ...persistConfig,
    key: "user TMA Store",
    whitelist: ["user"],
  };
  
  const persistedReducer = persistReducer(userPersistConfigStore, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export  {store,persistor} ;

// Tạo 1 Store (rootReducer)=> tạo nó createStore(rootReducer)