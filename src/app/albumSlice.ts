import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';

export const getAlbums = createAsyncThunk(
  "albums/getAlbums",
  async (dispatch, getState) => {
    return await fetch("http://jsonplaceholder.typicode.com/albums")
    .then(response => response.json());
  }
);

export interface Album {
  userId: number;
  id: number;
  title: string;
}

interface InitialTypes {
  albums: Album[];
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

export const selectAlbums = (state : RootState): Album[] => state.albums.albums;

// export const { getAlbums } = albumSlice.actions;
export default albumSlice.reducer;
