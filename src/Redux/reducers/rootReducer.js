import { combineReducers } from "redux";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistCommonConfig = {
  storage: storage,
  // stateReconciler: autoMergeLevel2,
};
const userPersistConfig = {
  ...persistCommonConfig,
  key: "userReducer",
  whitelist: ['oneUser']
};
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  admin: persistReducer(userPersistConfig, adminReducer),
});

export default rootReducer;
