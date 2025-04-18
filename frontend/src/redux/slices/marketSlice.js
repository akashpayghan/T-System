import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchMarketData = createAsyncThunk('market/fetchMarketData', async () => {
  const response = await api.get('/trading/market-data');
  return response.data;
});

const marketSlice = createSlice({
  name: 'market',
  initialState: { marketData: {}, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarketData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMarketData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.marketData = action.payload;
      })
      .addCase(fetchMarketData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default marketSlice.reducer;
