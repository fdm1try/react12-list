import { createSlice } from '@reduxjs/toolkit';
import { TItem } from '../../components/Item';

export type TDetailsState = {
  loading?: boolean;
  data?: TItem;
  error?: Error;
}

const initialState: TDetailsState = {
  loading: false
}

export const detailsSlice = createSlice({
  name: 'details', initialState, reducers: { 
    fetchRequest: (state) => ({...state, data: null, error: null, loading: true}), 
    fetchSuccess: (state, action) => ({...state, data: action.payload, error: null, loading: false}), 
    fetchFailure: (state, action) => ({...state, data: null, error: action.payload, loading: false})
  }
});

export const { fetchRequest, fetchFailure, fetchSuccess } = detailsSlice.actions;

export default detailsSlice.reducer;