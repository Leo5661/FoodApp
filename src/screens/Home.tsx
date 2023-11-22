import {View, Text, FlatList} from 'react-native';
import React from 'react';
import BagSvg from '../assets/bag.svg';
import SearchBox from '../components/SearchBox';
import DownArrowSvg from '../assets/down_arrow.svg';
import OfferCard from '../components/OfferCard';
import {OfferList} from '../utils/OfferList';
import ItemCard from '../components/ItemCard';
import {ItemList} from '../utils/ItemList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeStackNavigator';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const handleUnder = () => {
    console.log('Under');
  };

  const handleOver = () => {
    console.log('Over');
  };

  return (
    <View className="h-full w-full flex flex-col bg-white">
      <View className="flex-col py-8 px-4 bg-lightBlue">
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-2xl font-semibold">Hey, Rahul</Text>
          <BagSvg className="text-white" stroke={'white'} />
        </View>
        <View className="my-8">
          <SearchBox />
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-col items-start justify-start">
            <Text className="text-sm text-white/50 font-bold uppercase">
              Delivery to
            </Text>
            <View className="flex-row items-center mt-1">
              <Text className="text-md text-white font-normal mr-2">
                Green Way 3000, Sylhet
              </Text>
              <DownArrowSvg />
            </View>
          </View>
          <View className="flex-col items-start justify-start">
            <Text className="text-sm text-white/50 font-bold uppercase">
              Within
            </Text>
            <View className="flex-row items-center mt-1">
              <Text className="text-md text-white font-normal mr-2">
                1 Hour
              </Text>
              <DownArrowSvg />
            </View>
          </View>
        </View>
      </View>
      <View className="px-4 py-2 flex-col items-start flex-grow">
        <View className="w-full h-24">
          <FlatList
            horizontal={true}
            className="h-10"
            data={OfferList}
            renderItem={({item}) => <OfferCard offAmount={item} />}
            keyExtractor={item => item}
          />
        </View>
        <Text className="text-black/90 text-2xl font-semibold my-2">
          Recommended
        </Text>
        <View className="w-full flex-grow p-1 justify-around">
          <FlatList
            className="h-10"
            contentContainerStyle={{flexGrow: 1}}
            numColumns={2}
            data={ItemList}
            renderItem={({item}) => (
              <ItemCard price={item.price} name={item.title} />
            )}
            keyExtractor={(item: any) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
