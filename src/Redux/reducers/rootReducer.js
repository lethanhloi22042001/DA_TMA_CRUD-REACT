import { combineReducers } from "redux";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCommonConfig = {
  storage: storage,
};
const userPersistConfig = {
  ...persistCommonConfig,
  key: "userReducer",
  whitelist : []
};
const adminPersistConfig = {
  ...persistCommonConfig,
  key: "adminReducer",
  whitelist : ['Login_Admin']
};

//rootReducer => kết hợp thành 1 reducer duy nhất
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  admin: persistReducer(adminPersistConfig, adminReducer),
});

export default rootReducer;
