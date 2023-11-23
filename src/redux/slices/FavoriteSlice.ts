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
      if (state.favoriteItem.length == 0) {
        state.favoriteItem.splice(
          state.favoriteItem.length,
          0,
          action.payload.item,
        );
      } else {
        state.favoriteItem.forEach((item: ItemType) => {
          const index = state.favoriteItem.indexOf(item);

          if (state.favoriteItem[index].id == action.payload.item.id) {
            state.favoriteItem.splice(index, 1);
          } else {
            state.favoriteItem.splice(
              state.favoriteItem.length,
              0,
              action.payload.item,
            );
          }
        });
      }
    },
  },
});

export const {addToFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
