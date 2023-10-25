import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// import { useReducer } from 'react';

//combineReducers :  để kết hợp nhiều reducers thành một reducer duy nhất
//==>tạo ra một đối tượng reducer gốc gồm các reducer con.

//rootReducer==>  Reducer gốc của ứng dụng
// nó chứa toàn bộ trạng thái của ứng dụng
//thông qua các thuộc tính đã được kết hợp bởi combineReducers
const persistCommonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
const userPersistConfig = {
  ...persistCommonConfig,
  key: "Xin chao",
  whitelist: ["user"],
};
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export default rootReducer;
