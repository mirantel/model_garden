import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { uiReducer } from './ui';
import { errorReducer } from './error';
import { dataReducer } from './data';
import { mediaReducer } from './media';
import { labelingTaskReducer } from './labelingTask';
import { configureStore } from '@reduxjs/toolkit';
import { tasksStatusesReducer } from './tasksStatuses';
import { galleryReducer } from './gallery';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    error: errorReducer,
    data: dataReducer,
    media: mediaReducer,
    labelingTask: labelingTaskReducer,
    tasksStatuses: tasksStatusesReducer,
    gallery: galleryReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppThunk = ThunkAction<void, TAppState, unknown, Action<string>>;
export type TAppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<TAppDispatch>(); // Export a hook that can be reused to resolve types
export const useTypedSelector: TypedUseSelectorHook<TAppState> = useSelector;

export default store;
