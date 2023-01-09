import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import Services from './Services'
// First, create the thunk
const signup = createAsyncThunk(
    // you can there any thing its all your choice
    'datauser/signup',
    async (input, thunkAPI) => {

        try {
            const response = await Services.signup(input)
      return response.data
        } catch (error) {
            const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          return thunkAPI.rejectWithValue(message)
        }
   
    }
  )

const initialState = {
  datauser: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const counterSlice = createSlice({
  name: 'datauser',
  initialState,
  reducers: {
    reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    
 
  },

  extraReducers: (builder) => {
    builder
      
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.datauser = action.payload
      })
    }
})

// Action creators are generated for each case reducer function
export const { reset } = counterSlice.actions

export default counterSlice.reducer