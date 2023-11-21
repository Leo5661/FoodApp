import {View, Text, Image} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';

type Props = {};

const Home = (props: Props) => {
  const handleUnder = () => {
    console.log('Under');
  };

  const handleOver = () => {
    console.log('Over');
  };

  return (
    <View className="h-full w-full flex flex-col p-4 bg-white">
      <Text className="text-black">Home</Text>
    </View>
  );
};

export default Home;
