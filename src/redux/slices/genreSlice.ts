import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getGenres} from "../../service/service.api.movies.genre.ts";
import {IGenres} from "../../models/IGenresModels/IGenresMain.ts";

type GenresState = {
    genres: IGenres[];
    selectedGenreId: number| null;
}
const initialState:GenresState = {
    genres: [],
    selectedGenreId: null,
}

export const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: initialState,
    reducers:{
        setGenres: (state, action) => {
            state.selectedGenreId =action.payload;
        },
        setGenresClosed: (state) => {
            state.selectedGenreId = null;
        }
    },

    extraReducers: builder => builder
        .addCase(getGenres.fulfilled,
            (state, action: PayloadAction<IGenres[]>) =>{
            state.genres= action.payload
            }
            )
})

export const {setGenres, setGenresClosed} = genreSlice.actions;