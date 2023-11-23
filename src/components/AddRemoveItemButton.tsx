import {View, Text, Pressable} from 'react-native';
import React from 'react';
import PlusSvg from '../assets/plus.svg';

type Props = {
  count: number;
  onRemove: () => void;
  onAdd: () => void;
};

const AddRemoveItemButton = ({count, onAdd, onRemove}: Props) => {
  return (
    <View className="flex-row items-center flex-nowrap">
      <View
        className={`invisible flex-row items-center ${
          count >= 1 && 'visible'
        }`}>
        <Pressable
          onPress={onRemove}
          className="w-7 h-7 items-center justify-center bg-gray rounded-full">
          <PlusSvg stroke={'black'} />
        </Pressable>
        <Text className="text-lg text-black/90 font-bold mx-2">{count}</Text>
      </View>
      <Pressable
        onPress={onAdd}
        className="w-7 h-7 items-center justify-center bg-gray rounded-full">
        <PlusSvg />
      </Pressable>
    </View>
  );
};

export default AddRemoveItemButton;
