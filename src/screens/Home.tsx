import {View, Text, FlatList} from 'react-native';
import React from 'react';
import SearchBox from '../components/SearchBox';
import DownArrowSvg from '../assets/down_arrow.svg';
import OfferCard from '../components/OfferCard';
import {OfferList} from '../utils/OfferList';
import ItemCard from '../components/ItemCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeStackNavigator';
import {useDispatch} from '../hooks/useReduxHooks';
import {addItem, removeItem} from '../redux/slices/CartSlice';
import {addToFavorite} from '../redux/slices/FavoriteSlice';
import {useGetItemQuery} from '../redux/slices/apiSlice/itemList';
import CartIcon from '../components/CartIcon';
import {ItemType} from '../utils/ItemList';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {isLoading, data, error} = useGetItemQuery('');
  const handleItemClick = (item: number) => {
    navigation.navigate('Details', {itemId: item});
  };
  const handleAdd = (item: ItemType) => {
    dispatch(addItem({item: item}));
  };
  const handleLike = (item: ItemType) => {
    console.log('clicked like');
    dispatch(addToFavorite({item: item}));
  };
  const handleCartClick = () => {
    navigation.navigate('Cart');
  };
  const handleRemove = (item: ItemType) => {
    dispatch(removeItem({item: item}));
  };

  return (
    <View className="h-full w-full flex flex-col bg-white">
      <View className="flex-col py-8 px-4 bg-lightBlue">
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-2xl font-semibold">Hey, Rahul</Text>
          <CartIcon stroke="white" onClick={handleCartClick} />
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
            data={data?.products}
            renderItem={({item}) => (
              <ItemCard
                item={item}
                onItemClick={() => handleItemClick(item.id)}
                onLike={() => handleLike(item)}
                onAdd={() => handleAdd(item)}
                onRemove={() => handleRemove(item)}
              />
            )}
            keyExtractor={(item: any) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
