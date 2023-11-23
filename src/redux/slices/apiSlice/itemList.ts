import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ItemType} from '../../../utils/ItemList';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dummyjson.com/',
});

export type ListResponse = {
  products: ItemType[];
  total: number;
  skip: number;
  limit: number;
};

export const listApi = createApi({
  baseQuery: baseQuery,
  endpoints: builder => ({
    getItem: builder.query<ListResponse, string>({
      query: () => 'products',
    }),
    getItemById: builder.query<ItemType, number>({
      query: id => `products/${id}`,
    }),
  }),
});

export const {useGetItemQuery, useGetItemByIdQuery} = listApi;
export default listApi.reducer;
