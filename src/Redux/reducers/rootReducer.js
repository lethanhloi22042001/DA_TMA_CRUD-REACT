import {combineReducers} from 'redux' ;
import userReducer from './userReducer'
// import { useReducer } from 'react';

const rootReducer = combineReducers({
    user : userReducer,
});


export default rootReducer ;