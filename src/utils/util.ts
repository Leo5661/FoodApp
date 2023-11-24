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
