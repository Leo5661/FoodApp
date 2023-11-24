import {View, Text, TextInput} from 'react-native';
import React from 'react';
import SearchSvg from '../assets/search.svg';

type Props = {};

const SearchBox = () => {
  return (
    <View className="bg-blue rounded-full flex-row items-center py-1 px-4">
      <SearchSvg />
      <TextInput
        className="text-lg font-light text-white/80 ml-4 flex-grow p-2"
        placeholder="Search Products or store"
        inputMode="text"
        maxLength={50}
      />
    </View>
  );
};

export default SearchBox;
