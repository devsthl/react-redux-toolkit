import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllUsers = createAsyncThunk(
    //ten actions muon fire
    'users/fetchAllUsers',
    //function muon xu ly doi voi redux thunk
    async () => {
        const response = await axios.get("http://localhost:8080/users/all")
        return response.data
    }
)
const initialState = {
    listUsers: [],
    isLoading: false,
    isError: false,
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            //pending giong nhu trang thai dau tien la request
            .addCase(fetchAllUsers.pending, (state, action) => {
                // Add user to the state array
                state.isLoading = true;
                state.isError = false;
            })
            //fulfilled giong nhu trang thai thu 2 la goi API thanh cong successed
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.listUsers = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            //rejected giong nhu trang thai error
            .addCase(fetchAllUsers.rejected, (state, action) => {
                // Add user to the state array
                state.isLoading = false;
                state.isError = true;
            })
    },
})


export default userSlice.reducer;