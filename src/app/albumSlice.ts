import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

export const getAlbums = createAsyncThunk(
  "albums/getAlbums",
  async (dispatch, getState) => {
    return await fetch("http://jsonplaceholder.typicode.com/albums")
    .then(response => response.json());
  }
);

interface Card {
  userId: number;
  id: number;
  title: string;
}

interface InitialTypes {
  albums: Card[];
  status: "loading" | "success" | "failed" | null;
};

interface albumAction {
  type: string;
  payload?: any;
};

const initialState: InitialTypes = {
  albums: [],
  status: null
};

const albumSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
    status: null
  },
  reducers: {},
  // extraReducers: {
    extraReducers: (builder) => {
      builder
      .addCase(getAlbums.pending, (state: InitialTypes = initialState, action: albumAction) => {
        state.status = "loading"
      })
      .addCase(getAlbums.fulfilled, (state : InitialTypes = initialState, action: albumAction) => {
        state.status = "success";
        state.albums = action.payload
        // console.log(state.albums)
      })
      .addCase(getAlbums.rejected, (state : InitialTypes = initialState, action: albumAction) => {
        state.status = "failed";
      })
  }
});






export const selectAlbums = (state : InitialTypes = initialState): any => state.albums;

// export const { getAlbums } = albumSlice.actions;
export default albumSlice.reducer;



 
      // [getAlbums.pending]: (state : albumState = initialState, action: albumAction) => {
      //   state.status = " loading"
      // },
      // [getAlbums.fullfield]: (state : albumState = initialState, action: albumAction) => {
      //   state.status = "success";
      //   state.albums = action.payload
      // },
      // [getAlbums.rejected]: (state : albumState = initialState, action: albumAction) => {
      //   state.status = "failed";
      // }
      // getAlbums: (state : albumState = initialState, action: albumAction): albumState => {
      //   return {albums: [], loading: true}
      // }


  // reducers: {},
  // extraReducers: (builder) => {
  //   builder.getCase(fetchAlbums.pending, (state : albumState = initialState, action: albumAction) => {
  //     state.status = " loading"
  //   })
  // }
