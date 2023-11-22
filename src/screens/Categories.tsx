import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomNavStackParm} from '../navigation/BottomNavigator';

type Props = NativeStackScreenProps<BottomNavStackParm, 'Categories'>;

const Categories = ({navigation}: Props) => {
  return (
    <View>
      <Text className="text-black">Categories</Text>
    </View>
  );
};

export default Categories;
