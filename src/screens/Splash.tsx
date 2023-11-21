import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNavStackParamList} from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootNavStackParamList, 'Splash'>;

const Splash = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomStack', {
        screen: 'HomeStack',
        params: {screen: 'Home'},
      });
    }, 3000);
  }, []);

  return (
    <View className="flex flex-grow justify-center items-center">
      <Image source={require('../assets/splash_logo.png')} />
    </View>
  );
};

export default Splash;
