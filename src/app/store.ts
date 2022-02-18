import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './albumSlice';

export const store = configureStore({
  reducer: {
    albums: albumReducer,
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
