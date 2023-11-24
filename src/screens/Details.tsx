import {View, Text, Pressable, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeStackNavigator';
import RightArrowSvg from '../assets/right_arrow.svg';
import RatingStar from '../components/RatingStar';
import {ImageSlider} from 'react-native-image-slider-banner';
import HeartSvg from '../assets/heart.svg';
import {useDispatch, useSelector} from '../hooks/useReduxHooks';
import {getCount, getOff} from '../utils/util';
import {addItem, removeItem} from '../redux/slices/CartSlice';
import {addToFavorite} from '../redux/slices/FavoriteSlice';
import {useGetItemByIdQuery} from '../redux/slices/apiSlice/itemList';
import CartIcon from '../components/CartIcon';
import AddFavorite from '../components/AddFavorite';
import AddRemoveItemButton from '../components/AddRemoveItemButton';

type Props = NativeStackScreenProps<HomeStackParamList, 'Details'>;

const Details = ({route, navigation}: Props) => {
  const cartList = useSelector(state => state.persistedReducer.cart.cartItem);
  const {isLoading, isSuccess, data, error} = useGetItemByIdQuery(
    route.params.itemId,
  );
  const [image, setImage] = useState<{img: string}[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      if (image.length == 0) {
        const imageArr = data.images.map((item: any) => {
          return {img: item};
        });

        setImage(image => [...image, ...imageArr]);
      }
    }
  }, [data]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleBuy = () => {
    if (isSuccess) {
      dispatch(addItem({item: data}));
    }
    navigation.navigate('Cart');
  };

  const handleAdd = () => {
    if (isSuccess) {
      dispatch(addItem({item: data}));
    }
  };
  const handleRemove = () => {
    if (isSuccess) {
      dispatch(removeItem({item: data}));
    }
  };

  const handleLike = () => {
    if (isSuccess) {
      dispatch(addToFavorite({item: data}));
    }
  };

  const handleCartClick = () => {
    navigation.navigate('Cart');
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
          <CartIcon stroke="black" onClick={handleCartClick} />
        </View>
        <Text className="text-black text-5xl font-semibold mt-5 ">
          {data?.title}
        </Text>
        <RatingStar rating={data?.rating} />
      </View>
      <View className="w-full my-3 relative">
        <View className="absolute right-3 top-2 z-10 w-10 h-10 items-center justify-center bg-gray rounded-md">
          <AddFavorite onClick={handleLike} itemId={data?.id} />
        </View>
        <ImageSlider
          data={image as any}
          autoPlay={true}
          closeIconColor="gray"
        />
      </View>
      <View className="flex-col px-5 items-start w-full flex-grow">
        <View className="flex-row items-center">
          <Text className="text-lightBlue font-semibold text-lg">{`$ ${data?.price}`}</Text>
          <View className="flex-row rounded-full items-center ml-3 py-1 px-2 bg-blue">
            <Text className="text-white/80 text-md font-normal">
              {`$${
                isSuccess &&
                getOff(data.discountPercentage, data.price).toFixed(2)
              } OFF`}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center w-full justify-evenly mt-8">
          {getCount(cartList, data?.id!) ? (
            <View className="border border-lightBlue flex-grow bg-white rounded-2xl p-3 items-center justify-center mr-4">
              <AddRemoveItemButton
                isDark={true}
                buttonSize="8"
                itemId={data?.id!}
                onRemove={handleRemove}
                onAdd={handleAdd}
              />
            </View>
          ) : (
            <Pressable
              onPress={handleAdd}
              className="border border-lightBlue flex-grow bg-white rounded-2xl p-5 items-center justify-center mr-4">
              <Text className="text-lightBlue text-base font-semibold">
                Add To Cart
              </Text>
            </Pressable>
          )}
          <Pressable
            onPress={handleBuy}
            className="bg-lightBlue rounded-2xl p-5 flex-grow items-center justify-center ml-4">
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
            {data?.description}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;
