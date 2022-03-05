import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const getPhotos = createAsyncThunk <Photo[], { id: string }, any>(
  "photos/getPhotos",
  async(params, thunkAPI) => {
    return await fetch(`http://jsonplaceholder.typicode.com/photos?albumId=${params.id}`)
    .then(response => response.json());
  }
);

interface PhotoAction {
  type: string;
  payload?: any; 
};

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
};

interface InitialTypes {
  photos: Photo[];
  status: "loading" | "success" | "failed" | null;
};

const initialState: InitialTypes = {
  photos: [],
  status: "loading"
};

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    status: null
  },
  reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getPhotos.pending, (state: InitialTypes = initialState, action: PhotoAction) => {
        state.status = "loading"
      })
      .addCase(getPhotos.fulfilled, (state: InitialTypes = initialState, action: PhotoAction) => {
        state.status = "success";
        state.photos = action.payload;
        // console.log(action.payload);
        console.log(state.status);
      })
      .addCase(getPhotos.rejected, (state: InitialTypes = initialState, action: PhotoAction) => {
        state.status = "failed";
        
      })
    }
})

export const selectPhotos = (state : RootState): Photo[] => state.photos.photos;

export default photoSlice.reducer;