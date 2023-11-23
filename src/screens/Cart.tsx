import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeStackNavigator';
import RightArrowSvg from '../assets/right_arrow.svg';

type Props = NativeStackScreenProps<HomeStackParamList, 'Cart'>;

const Cart = ({navigation}: Props) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View className="h-full w-full flex-col bg-white pt-5">
      <View className="flex-col px-5 items-start w-full">
        <View className="flex-row items-center justify-start w-full">
          <Pressable
            onPress={handleBack}
            className="w-8 h-8 items-center justify-center bg-gray rounded-full">
            <RightArrowSvg />
          </Pressable>
          <Text className="text-black text-xl ml-4 font-semibold">
            Shopping Cart (5)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
