import {createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import rootReducer from './reducers/rootReducer'
import rootReducer from '../Redux/reducers/rootReducer'

const store = createStore(rootReducer ,applyMiddleware(thunk)) ;


export default store ;

// Tạo 1 Store (rootReducer)=> tạo nó createStore(rootReducer)