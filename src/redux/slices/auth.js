import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async(params) => {
  const {data} = await axios.post('/auth/register', params);
  return data;
});

const initialState = {
  data: null,
  status: 'loading'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRegister.pending] : (state) => {
      state.data = null;
      state.status = 'loading';
    },
    [fetchRegister.fulfilled] : (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    },
    [fetchRegister.rejected] : (state) => {
      state.data = null;
      state.status = 'error'
    },
  }
});

export const selectIsAuth = state => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;