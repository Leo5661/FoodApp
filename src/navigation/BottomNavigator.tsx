import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator, {HomeStackParamList} from './HomeStackNavigator';
import HomeSvg from '../assets/home.svg';
import CategoriesSvg from '../assets/category.svg';
import FavoriteSvg from '../assets/heart.svg';
import MoreSvg from '../assets/more_vertical.svg';
import {NavigatorScreenParams} from '@react-navigation/native';
import More from '../screens/More';
import Favorite from '../screens/Favorite';
import Categories from '../screens/Categories';

export type BottomNavStackParm = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Categories: undefined;
  Favorite: undefined;
  More: undefined;
};

const BottomNavStack = createMaterialBottomTabNavigator<BottomNavStackParm>();

const BottomNavigator = () => {
  return (
    <BottomNavStack.Navigator
      initialRouteName="HomeStack"
      activeColor="#6231AD"
      labeled={true}
      inactiveColor="gray"
      barStyle={{
        backgroundColor: '#ffffffe6',
      }}>
      <BottomNavStack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <HomeSvg width={20} height={20} stroke={color} />
          ),
        }}
      />

      <BottomNavStack.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}) => (
            <CategoriesSvg width={20} height={20} stroke={color} />
          ),
        }}
      />

      <BottomNavStack.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color}) => (
            <FavoriteSvg width={20} height={20} stroke={color} />
          ),
        }}
      />

      <BottomNavStack.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <MoreSvg width={20} height={20} fill={color} />
          ),
        }}
      />
    </BottomNavStack.Navigator>
  );
};

export default BottomNavigator;
