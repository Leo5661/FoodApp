import {View, Text, Pressable, ScrollView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeStackNavigator';
import RightArrowSvg from '../assets/right_arrow.svg';
import BagSvg from '../assets/bag.svg';
import RatingStar from '../components/RatingStar';
import {ImageSlider} from 'react-native-image-slider-banner';
import HeartSvg from '../assets/heart.svg';

type Props = NativeStackScreenProps<HomeStackParamList, 'Details'>;

const Details = ({route, navigation}: Props) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleLike = () => {
    console.log(`Liked ${route.params.itemId}`);
  };
  return (
    <View className="h-full w-full flex-col bg-white pt-5">
      <View className="flex-col px-5 items-start w-full">
        <View className="flex-row justify-between items-center w-full">
          <Pressable
            onPress={handleBack}
            className="w-8 h-8 items-center justify-center bg-gray rounded-full">
            <RightArrowSvg />
          </Pressable>
          <BagSvg stroke={'black'} />
        </View>
        <Text className="text-black text-5xl font-semibold mt-5 ">
          {route.params.itemId}
        </Text>
        <RatingStar rating={4.5} />
      </View>
      <View className="w-full my-3 relative">
        <Pressable
          className="absolute right-3 top-2 z-10 w-10 h-10 items-center justify-center bg-gray rounded-md"
          onPress={handleLike}>
          <HeartSvg stroke={'black'} />
        </Pressable>
        <ImageSlider
          data={[
            'https://i.dummyjson.com/data/products/6/1.png',
            'https://i.dummyjson.com/data/products/6/2.jpg',
            'https://i.dummyjson.com/data/products/6/3.png',
          ]}
          autoPlay={true}
        />
      </View>
      <View className="flex-col px-5 items-start w-full flex-grow">
        <View className="flex-row items-center">
          <Text className="text-lightBlue font-semibold text-lg">{`$ ${'34.7'}`}</Text>
          <View className="flex-row rounded-full items-center ml-3 py-1 px-2 bg-blue">
            <Text className="text-white/80 text-md font-normal">
              $22.04 OFF
            </Text>
          </View>
        </View>
        <View className="flex-row items-center w-full justify-evenly mt-8">
          <Pressable className="border border-lightBlue flex-grow bg-white rounded-2xl p-5 items-center justify-center mr-4">
            <Text className="text-lightBlue text-base font-semibold">
              Add To Cart
            </Text>
          </Pressable>
          <Pressable className="bg-lightBlue rounded-2xl p-5 flex-grow items-center justify-center ml-4">
            <Text className="text-white/80 text-base font-semibold">
              Buy Now
            </Text>
          </Pressable>
        </View>
        <Text className="text-black/80 text-lg font-semibold mt-5 ">
          Details
        </Text>
        <ScrollView>
          <Text className="text-black/60 text-base font-normal mt-2 ">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Nullam quis risus eget urna mollis ornare vel eu leo.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;
