import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt", 
    initialState:{
        header : "GptSearch",
        movies:null,
        textByGpt:null
    },
    reducers:{
        changeHeader:(state) => {
            state.header = state.header === "GptSearch" ? "Homepage" : "GptSearch";
        },
        updateTextByGpt : (state,action) => {
            state.textByGpt = action.payload;
        },
        updateMovies : (state, action)=> {
            state.movies = action.payload;
        }
    }
})

export const {updateMovies,updateTextByGpt, changeHeader} = gptSlice.actions;
export default gptSlice.reducer; 