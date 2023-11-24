import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ItemType} from '../../utils/ItemList';

export type CartItemType = {
  count: number;
  item: ItemType;
};

type CartType = {
  cartItem: CartItemType[];
};
export type ItemPayload = {
  item: ItemType;
};

const initialState: CartType = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemPayload>) => {
      const addItem: CartItemType = {
        count: 1,
        item: action.payload.item,
      };

      const alreadyPresentItemIndex = state.cartItem.findIndex(
        item => action.payload.item.id === item.item.id,
      );

      console.log('index: ===========>', alreadyPresentItemIndex);
      if (alreadyPresentItemIndex != -1) {
        state.cartItem[alreadyPresentItemIndex].count += 1;
      } else {
        state.cartItem.splice(state.cartItem.length, 0, addItem);
      }
    },

    removeItem: (state, action: PayloadAction<ItemPayload>) => {
      const itemIndex = state.cartItem.findIndex(
        item => item.item.id === action.payload.item.id,
      );

      if (itemIndex != -1) {
        if (state.cartItem[itemIndex].count == 1) {
          state.cartItem.splice(itemIndex, 1);
        } else {
          state.cartItem[itemIndex].count -= 1;
        }
      }
    },
  },
});

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
