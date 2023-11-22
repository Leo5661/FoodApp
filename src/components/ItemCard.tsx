import {View, Text, Pressable} from 'react-native';
import React from 'react';
import PlaceholderSvg from '../assets/placeholderImg.svg';
import HeartSvg from '../assets/heart.svg';
import PlusSvg from '../assets/plus.svg';

type Props = {
  price: number;
  name: string;
  onItemClick: () => void;
  onLike: () => void;
  onAdd: () => void;
};

const ItemCard = ({price, name, onAdd, onItemClick, onLike}: Props) => {
  return (
    <View className="w-2/4 items-center justify-center p-2 bg-transparent">
      <Pressable
        className="flex-col h-[200px] w-full items-center p-4 relative rounded-md bg-gray"
        onPress={onItemClick}>
        <Pressable className="absolute left-1 top-1 z-10" onPress={onLike}>
          <HeartSvg stroke={'black'} />
        </Pressable>
        <View className="my-2 w-full justify-center items-center flex-grow">
          <PlaceholderSvg />
        </View>
        <View className="w-full flex-row justify-between">
          <View className="flex-col items-start">
            <Text className="text-black font-semibold text-md">{`$ ${price}`}</Text>
            <Text className="text-black font-light text-base mt-1">{name}</Text>
          </View>
          <Pressable
            onPress={onAdd}
            className="w-7 h-7 rounded-full bg-lightBlue flex justify-center items-center">
            <PlusSvg className="w-full h-full" />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

export default ItemCard;
