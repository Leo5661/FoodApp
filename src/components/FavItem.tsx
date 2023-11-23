import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {CartItemType} from '../redux/slices/CartSlice';
import {ItemType} from '../utils/ItemList';

type Props = {
  item: ItemType;
  onRemove: () => void;
};

const FavItem = ({item, onRemove}: Props) => {
  return (
    <View className="flex-row w-full items-center p-4 border-b border-black/5">
      <Image source={{uri: item.thumbnail}} className="w-9 h-9 rounded-sm" />
      <View className="flex-col items-start flex-grow ml-4">
        <Text className="text-black font-normal text-base">{item.title}</Text>
        <Text className="text-black/80 font-light text-base">{`$ ${item.price}`}</Text>
      </View>
      <Pressable
        onPress={onRemove}
        className="border border-lightBlue bg-white rounded-full px-4  py-2 items-center justify-center">
        <Text className="text-lightBlue text-base font-semibold">Remove</Text>
      </Pressable>
    </View>
  );
};

export default FavItem;
