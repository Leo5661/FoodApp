import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomNavStackParm} from '../navigation/BottomNavigator';
import NodataSvg from '../assets/nodata.svg';

type Props = NativeStackScreenProps<BottomNavStackParm, 'Categories'>;

const Categories = ({navigation}: Props) => {
  return (
    <View className="flex-col items-center justify-center h-full">
      <NodataSvg width={200} height={200} />
      <Text className="mt-4 text-black/50">No data Found !</Text>
    </View>
  );
};

export default Categories;
