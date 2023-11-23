import {View, Text, Pressable, FlatList} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomNavStackParm} from '../navigation/BottomNavigator';
import {useDispatch, useSelector} from '../hooks/useReduxHooks';
import RightArrowSvg from '../assets/right_arrow.svg';
import NodataSvg from '../assets/nodata.svg';
import FavItem from '../components/FavItem';
import {addToFavorite} from '../redux/slices/FavoriteSlice';

type Props = NativeStackScreenProps<BottomNavStackParm, 'Favorite'>;

const Favorite = ({navigation}: Props) => {
  const favoriteList = useSelector(
    state => state.persistedReducer.favorite.favoriteItem,
  );
  const dispatch = useDispatch();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRemove = (item: any) => {
    console.log('clicked like');
    dispatch(addToFavorite({item: item}));
  };

  return (
    <View className="h-full w-full flex-col bg-white p-5">
      <View className="flex-row items-center justify-start w-full">
        <Pressable
          onPress={handleBack}
          className="w-8 h-8 items-center justify-center bg-gray rounded-full">
          <RightArrowSvg />
        </Pressable>
        <Text className="text-black text-xl ml-4 font-semibold">
          Your Favorite
        </Text>
      </View>
      <View className="flex-col flex-grow my-2 ">
        {favoriteList.length == 0 ? (
          <View className="flex-col items-center justify-center h-full">
            <NodataSvg width={200} height={200} />
            <Text className="mt-4 text-black/50">No data Found !</Text>
          </View>
        ) : (
          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            data={favoriteList}
            renderItem={({item}) => (
              <FavItem item={item} onRemove={() => handleRemove(item)} />
            )}
            keyExtractor={(item: any) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Favorite;
