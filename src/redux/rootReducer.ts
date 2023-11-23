import {combineReducers} from '@reduxjs/toolkit';
import {cartSlice} from './slices/CartSlice';
import {favoriteSlice} from './slices/FavoriteSlice';
import {listApi} from './slices/apiSlice/itemList';

export const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  favorite: favoriteSlice.reducer,
});

//type
export type RootState = ReturnType<typeof rootReducer>;
