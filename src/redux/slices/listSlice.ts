import { createSlice } from '@reduxjs/toolkit';
import { TItem } from '../../components/Item';

export type TListState = {
  loading?: boolean;
  error?: Error;
  data?: Array<TItem>;
};


const initialState: TListState = {
  loading: false
}

export const listSlice = createSlice({
  name: 'list', initialState, reducers: { 
    fetchRequest: (state) => ({...state, data: null, error: null, loading: true}), 
    fetchSuccess: (state, action) => ({...state, data: action.payload, error: null, loading: false}), 
    fetchFailure: (state, action) => ({...state, data: null, error: action.payload, loading: false})
  }
});

export const { fetchRequest, fetchFailure, fetchSuccess } = listSlice.actions;

export default listSlice.reducer;