import {View, Text, Pressable} from 'react-native';
import React from 'react';
import PlusSvg from '../assets/plus.svg';
import MinusSvg from '../assets/minus.svg';
import {useSelector} from '../hooks/useReduxHooks';
import {getCount} from '../utils/util';

type Props = {
  isDark?: boolean;
  itemId: number;
  onRemove: () => void;
  onAdd: () => void;
  buttonSize?: string;
};

const AddRemoveItemButton = ({
  itemId,
  onAdd,
  onRemove,
  isDark = false,
  buttonSize = '7',
}: Props) => {
  const cartList = useSelector(state => state.persistedReducer.cart.cartItem);
  const count = getCount(cartList, itemId);

  return (
    <View className="flex-row items-center flex-nowrap">
      <View className={`flex-row items-center ${!count && 'hidden'}`}>
        <Pressable
          onPress={onRemove}
          className={`w-${buttonSize} h-${buttonSize} items-center justify-center  rounded-full ${
            isDark ? 'bg-lightBlue' : 'bg-gray'
          }`}>
          <MinusSvg stroke={isDark ? 'white' : 'black'} />
        </Pressable>
        <Text className="text-lg text-black/90 font-bold mx-2">{count}</Text>
      </View>
      <Pressable
        onPress={onAdd}
        className={`w-${buttonSize} h-${buttonSize} items-center justify-center  rounded-full ${
          isDark ? 'bg-lightBlue' : 'bg-gray'
        }`}>
        <PlusSvg stroke={isDark ? 'white' : 'black'} />
      </Pressable>
    </View>
  );
};

export default AddRemoveItemButton;
