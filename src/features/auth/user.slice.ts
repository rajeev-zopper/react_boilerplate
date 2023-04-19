import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  first_name: string
  age: number | null
  isLoggedIn: boolean
}

const initialState: IState = {
  first_name: '',
  age: null,
  isLoggedIn: false,
}

const userLSice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // add user
    updateUser: (state, action: PayloadAction<string>) => {
      state.first_name = action.payload
    },
    // reset state
    resetUser: (state) => {
      state.first_name = ''
      state.age = null
    },
  },
})

const { reducer } = userLSice

const { updateUser, resetUser } = userLSice.actions

export { reducer as userReducer, updateUser, resetUser }
