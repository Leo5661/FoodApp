import {View, Text, Pressable, FlatList} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/HomeStackNavigator';
import RightArrowSvg from '../assets/right_arrow.svg';
import {useSelector} from '../hooks/useReduxHooks';
import CartItem from '../components/CartItem';
import EmptyCartSvg from '../assets/empty_cart.svg';

type Props = NativeStackScreenProps<HomeStackParamList, 'Cart'>;

const Cart = ({navigation}: Props) => {
  const cartList = useSelector(state => state.persistedReducer.cart.cartItem);

  const handleBack = () => {
    navigation.goBack();
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
          {`Shopping Cart (${cartList.length})`}
        </Text>
      </View>
      <View className="flex-col flex-grow my-2 ">
        {cartList.length == 0 ? (
          <View className="flex-col items-center justify-center">
            <EmptyCartSvg width={200} height={200} />
            <Text className="mt-4 text-black/50">No Item found in cart</Text>
          </View>
        ) : (
          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            data={cartList}
            renderItem={({item}) => <CartItem item={item} />}
            keyExtractor={(item: any) => item.item.id}
          />
        )}
      </View>
      <View className="flex-col bg-gray rounded-lg p-4">
        <View className="flex-row justify-between px-2">
          <Text>Subtotal</Text>
          <Text>$35.96</Text>
        </View>
        <View className="flex-row justify-between px-2">
          <Text>Delivery</Text>
          <Text>$2.00</Text>
        </View>
        <View className="flex-row justify-between px-2">
          <Text>Total</Text>
          <Text>$37.96</Text>
        </View>

        <Pressable
          disabled={cartList.length == 0}
          onPress={() => {}}
          className="bg-lightBlue rounded-2xl w-full p-5 flex-grow items-center justify-center">
          <Text className="text-white/80 text-base font-semibold">
            Proceed To checkout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
