import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ItemPayload} from './CartSlice';
import {ItemType} from '../../utils/ItemList';

type Favorite = {
  favoriteItem: ItemType[];
};
const initialState: Favorite = {
  favoriteItem: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<ItemPayload>) => {
      const itemIndex = state.favoriteItem.findIndex(
        item => item.id === action.payload.item.id,
      );

      if (itemIndex != -1) {
        state.favoriteItem.splice(itemIndex, 1);
      } else {
        state.favoriteItem.splice(
          state.favoriteItem.length,
          0,
          action.payload.item,
        );
      }
    },
  },
});

export const {addToFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
