import {View, Text} from 'react-native';
import React from 'react';
import {Polygon, Svg} from 'react-native-svg';

type Props = {
  rating: number;
};

const Star = ({fill = 'none'}) => (
  <Svg height="100%" width="100%" viewBox="0 0 51 48">
    <Polygon
      points="25,1 32,17 50,18 36,29 39,47 25,38 11,47 14,29 0,18 18,17"
      fill={fill}
    />
  </Svg>
);

const RatingStar = ({rating}: Props) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let fill;
    if (i <= Math.floor(rating)) {
      // Full star
      fill = '#F9B023';
    } else if (i - 0.5 === rating) {
      // Half star
      fill = 'url(#half)';
    } else {
      // Empty star
      fill = '#F8F9FB';
    }
    stars.push(
      <View key={i} className="w-3 h-3 ml-1">
        <Star fill={fill} />
      </View>,
    );
  }

  return (
    <View className="flex-row items-center">
      <View className="flex-row items-center">{stars}</View>
      <Text className="text-black/50 font-light text-md ml-2">110 Reviews</Text>
    </View>
  );
};

export default RatingStar;
