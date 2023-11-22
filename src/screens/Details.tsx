import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeStackNavigator';

type Props = NativeStackScreenProps<HomeStackParamList, 'Details'>;

const Details = ({route, navigation}: Props) => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export default Details;
