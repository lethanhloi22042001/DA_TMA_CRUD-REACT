import { applyMiddleware } from "redux";
// import {createStore ,applyMiddleware} from 'redux'
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Redux/reducers/rootReducer";

import { persistStore, persistReducer } from "redux-persist";

//store => 1.Tạo redux store rootReducer +  applyMiddleware=> xử lí các acitons không đồng bộ
const store = createStore(rootReducer, applyMiddleware(thunk));

// dùng persistor => Lưu dữ liệu bền vừng vào localStorage
// const persistor = persistStore(store);

export const dispatch = store.dispatch;
export { store };
