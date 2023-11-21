import {View, Text} from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import BottomNavigator, {BottomNavStackParm} from './BottomNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';

export type RootNavStackParamList = {
  Splash: undefined;
  BottomStack: NavigatorScreenParams<BottomNavStackParm>;
};

const RootNavStack = createNativeStackNavigator<RootNavStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <RootNavStack.Screen name="Splash" component={Splash} />
        <RootNavStack.Screen name="BottomStack" component={BottomNavigator} />
      </RootNavStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
