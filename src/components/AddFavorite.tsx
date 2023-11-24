import {Pressable} from 'react-native';
import React from 'react';
import HeartSvg from '../assets/heart.svg';
import {isFavorite} from '../utils/util';
import {useSelector} from '../hooks/useReduxHooks';

type Props = {
  itemId: number | undefined;
  onClick: () => void;
};

const AddFavorite = ({itemId, onClick}: Props) => {
  const favList = useSelector(
    state => state.persistedReducer.favorite.favoriteItem,
  );
  if (!itemId) {
    return null;
  }

  return (
    <Pressable
      className={`items-center justify-center rounded-md`}
      onPress={onClick}>
      <HeartSvg stroke={isFavorite(favList, itemId) ? 'blue' : 'lightgray'} />
    </Pressable>
  );
};

export default AddFavorite;
