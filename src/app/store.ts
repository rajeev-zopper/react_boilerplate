import { configureStore, combineReducers } from '@reduxjs/toolkit'

// reducers
import { userReducer } from '../features/auth/user.slice'
import { authApi } from '../services/API/auth.api'

const reducers = combineReducers({
  // slices
  user: userReducer,

  //APIs
  [authApi.reducerPath]: authApi.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
