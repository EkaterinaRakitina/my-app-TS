import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

export const getAlbums = createAsyncThunk(
  "albums/getAlbums",
  async (dispatch, getState) => {
    return await fetch("http://jsonplaceholder.typicode.com/albums")
    .then(response => response.json());
  }
);

interface albumState {
  albums: any[];
  status: any;
};

interface albumAction {
  type: string;
  payload?: any;
};

const initialState: albumState = {
  albums: [],
  status: null
};

const albumSlice: any = createSlice ({
  name: "albums",
  initialState: {
    albums: [],
    status: null
  },

  reducers: {
    [getAlbums.pending]: (state : albumState = initialState, action: albumAction) => {
      state.status = " loading"
    },
    [getAlbums.fullfield]: (state : albumState = initialState, action: albumAction) => {
      state.status = "success";
      state.albums = action.payload
    },
    [getAlbums.rejected]: (state : albumState = initialState, action: albumAction) => {
      state.status = "failed";
    }
    // getAlbums: (state : albumState = initialState, action: albumAction): albumState => {
    //   return {albums: [], loading: true}
    // }
  }
});

export const selectAlbums = (state : albumState = initialState) => state.albums;
// export const { getAlbums } = albumSlice.actions;
export default albumSlice.reducer;
