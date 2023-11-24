import {View, Pressable, Text} from 'react-native';
import React from 'react';
import BagSvg from '../assets/bag.svg';
import {useSelector} from '../hooks/useReduxHooks';

type Props = {
  onClick: () => void;
  stroke: string;
};

const CartIcon = ({onClick, stroke}: Props) => {
  const cartItemList = useSelector(
    state => state.persistedReducer.cart.cartItem,
  );

  return (
    <View className="relative w-9 h-9 items-center justify-center">
      <View
        className={`items-center z-10 absolute justify-center right-0 top-0 bg-darkYellow rounded-full w-4 h-4 ${
          cartItemList.length === 0 && 'hidden'
        }`}>
        <Text className="text-sm text-white font-bold">
          {cartItemList.length}
        </Text>
      </View>
      <Pressable onPress={onClick} className="p-2">
        <BagSvg className="text-white" stroke={`${stroke}`} />
      </Pressable>
    </View>
  );
};

export default CartIcon;
