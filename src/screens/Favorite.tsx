import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomNavStackParm} from '../navigation/BottomNavigator';

type Props = NativeStackScreenProps<BottomNavStackParm, 'Favorite'>;

const Favorite = (props: Props) => {
  return (
    <View>
      <Text className="text-black">Favorite</Text>
    </View>
  );
};

export default Favorite;
