import {View, Text} from 'react-native';
import React from 'react';
import PlaceholderSvg from '../assets/placeholderImg.svg';

type Props = {
  offAmount: string;
};

const OfferCard = ({offAmount}: Props) => {
  return (
    <View className="flex-row items-center bg-darkYellow py-4 px-8 rounded-lg m-1">
      <View className="">
        <PlaceholderSvg />
      </View>
      <View className="flex-col items-start justify-center ml-8">
        <Text className="text-lg font-normal text-white/80">Get</Text>
        <Text className="text-2xl font-bold text-white">{`${offAmount}% OFF`}</Text>
        <Text className="text-lg font-light text-white/80">
          on first 03 order
        </Text>
      </View>
    </View>
  );
};

export default OfferCard;
