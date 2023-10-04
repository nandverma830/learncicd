import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {AppReducer} from '../Redux/Reducers'

const rootReducer = combineReducers({
    AppReducer: AppReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
