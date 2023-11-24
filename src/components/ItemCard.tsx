import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import HeartSvg from '../assets/heart.svg';
import {ItemType} from '../utils/ItemList';
import AddRemoveItemButton from './AddRemoveItemButton';
import AddFavorite from './AddFavorite';

type Props = {
  item: ItemType;
  onItemClick: () => void;
  onLike: () => void;
  onAdd: () => void;
  onRemove: () => void;
};

const ItemCard = ({item, onAdd, onItemClick, onLike, onRemove}: Props) => {
  return (
    <View className="w-2/4 items-center justify-center p-2 bg-transparent">
      <Pressable
        className="flex-col h-[200px] w-full items-center p-4 relative rounded-md bg-gray"
        onPress={onItemClick}>
        <View className="z-10 absolute left-1 top-1">
          <AddFavorite onClick={onLike} itemId={item.id} />
        </View>

        <View className="my-2 w-full justify-center items-center flex-grow">
          <Image
            source={{uri: item.thumbnail}}
            className="w-full h-20 rounded-md content-fi"
          />
        </View>
        <View className="w-full flex-row justify-between items-start">
          <View className="flex-col items-start">
            <Text className="text-black font-semibold text-md">{`$ ${item.price}`}</Text>
            <Text className="text-black font-light text-base mt-1">
              {item.title}
            </Text>
          </View>
          <AddRemoveItemButton
            isDark={true}
            buttonSize="4"
            itemId={item.id}
            onRemove={onRemove}
            onAdd={onAdd}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default ItemCard;
