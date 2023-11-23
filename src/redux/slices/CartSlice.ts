import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ItemType} from '../../utils/ItemList';

type CartItemType = {
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
      state.cartItem.forEach((item: any) => {
        const index = state.cartItem.indexOf(item);
        if (state.cartItem[index].item.id == action.payload.item.id) {
          state.cartItem[index].count = state.cartItem[index].count + 1;
        } else {
          state.cartItem.splice(state.cartItem.length, 0, addItem);
        }
      });
    },
    removeItem: (state, action: PayloadAction<ItemPayload>) => {
      state.cartItem.forEach((item: any) => {
        const index = state.cartItem.indexOf(item);
        if (state.cartItem[index].item.id == action.payload.item.id) {
          if (state.cartItem[index].count > 1) {
            state.cartItem[index].count = state.cartItem[index].count - 1;
          } else if (state.cartItem[index].count == 1) {
            state.cartItem.splice(index, 1);
          }
        }
      });
    },
  },
});

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
