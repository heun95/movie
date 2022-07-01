import { createSlice } from "@reduxjs/toolkit"; 

const subsSlice = createSlice({
    name : 'subsReducer',
    initialState : [],
    reducers: {
        add: (state, action) => [action.payload, ...state],
        remove: (state, action) => {
            return state.filter((movie)=> movie.id !== parseInt(action.payload.id))
        }
    }
})

export const subsActions = subsSlice.actions;
export default subsSlice.reducer;