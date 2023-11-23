import {View, Text, Image} from 'react-native';
import React from 'react';
import {CartItemType, addItem, removeItem} from '../redux/slices/CartSlice';
import AddRemoveItemButton from './AddRemoveItemButton';
import {useDispatch} from '../hooks/useReduxHooks';

type Props = {
  item: CartItemType;
};

const CartItem = ({item}: Props) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addItem({item: item.item}));
  };
  const handleRemove = () => {
    dispatch(removeItem({item: item.item}));
  };

  return (
    <View className="flex-row w-full items-center p-4 border-b border-black/5">
      <Image
        source={{uri: item.item.thumbnail}}
        className="w-9 h-9 rounded-sm"
      />
      <View className="flex-col items-start flex-grow ml-4">
        <Text className="text-black font-normal text-base">
          {item.item.title}
        </Text>
        <Text className="text-black/80 font-light text-base">{`$ ${item.item.price}`}</Text>
      </View>
      <AddRemoveItemButton
        count={item.count}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
    </View>
  );
};

export default CartItem;
