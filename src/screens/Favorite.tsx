import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomNavStackParm} from '../navigation/BottomNavigator';
import {useSelector} from '../hooks/useReduxHooks';
import NodataSvg from '../assets/nodata.svg';

type Props = NativeStackScreenProps<BottomNavStackParm, 'Favorite'>;

const Favorite = ({navigation}: Props) => {
  const favoriteList = useSelector(
    state => state.persistedReducer.favorite.favoriteItem,
  );

  if (favoriteList.length === 0) {
    return (
      <View className="flex-col items-center justify-center h-full">
        <NodataSvg width={200} height={200} />
        <Text className="mt-4 text-black/50">No data Found !</Text>
      </View>
    );
  }

  return (
    <View>
      <Text className="text-black">Favorite</Text>
    </View>
  );
};

export default Favorite;
