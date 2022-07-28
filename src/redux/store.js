import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        //trong counterSlice k cos counterReducer
        //nhung Slice da boc counterReducer
        counter: counterReducer,
        user: userReducer,
    },
})