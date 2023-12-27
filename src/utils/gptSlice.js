import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt", 
    initialState:{
        header : "Gpt Search",
        movies:null,
        textByGpt:null
    },
    reducers:{
        changeHeader:(state) => {
            state.header = state.header === "Gpt Search" ? "Homepage" : "Gpt Search";
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