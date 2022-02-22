import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './albumSlice';
import photoReducer from './photoSlice';

export const store = configureStore({
  reducer: {
    albums: albumReducer,
    photos: photoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
