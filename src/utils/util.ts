import {CartItemType} from '../redux/slices/CartSlice';
import {ItemType} from './ItemList';

export const getOff = (discountPer: number, fullPrice: number): number => {
  return fullPrice * (discountPer / 100);
};

export const getCount = (
  cartList: CartItemType[],
  itemId: number,
): number | null => {
  const item = cartList.find(item => item.item.id === itemId);
  if (!item) return null;
  return item.count;
};

export const isFavorite = (favList: ItemType[], itemId: number): boolean => {
  const itemIndex = favList.findIndex(item => item.id === itemId);
  if (itemIndex == -1) return false;
  return true;
};

export const getCartTotal = (cartList: CartItemType[]): number => {
  if (cartList.length == 0) return 0;

  let total = 0;
  cartList.forEach(item => {
    total += item.item.price * item.count;
  });
  return total;
};
