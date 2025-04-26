import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMoviesResults} from "../../models/ImoviesResults.ts";
import {getMovies, getMoviesById, getMoviesVideosById, searchMovies} from "../../service/service.api.movies.ts";
import {IMoviesDetails} from "../../models/IMoviesDetails/IMovieDetails.ts";
import {IVideoResults} from "../../models/IMoviesDetails/IVideoResponse.ts";

type MovieState = {
    movies: IMoviesResults[],
    loading: boolean,
    error: string | null,
    selectedMovieId: IMoviesDetails | null,
    searchResults: IMoviesResults[],
    videosResponse: IVideoResults[]
}
const initialState: MovieState  = {
    movies: [],
    loading: false,
    error: null,
    selectedMovieId: null,
    searchResults:[],
    videosResponse: [],
}

export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initialState,
    reducers: {
        clearSearchResults: (state) => {
            state.searchResults = [];}
    },
    extraReducers: builder => builder
        .addCase(
            getMovies.pending,
            (state) =>{
                state.loading = true;
                state.error = null;
            }
            )
        .addCase(
            getMovies.fulfilled,
            (state, action:PayloadAction<IMoviesResults[]>) =>{
                state.movies = action.payload;
                state.loading = false;
                state.error = null
            }
            )
        .addCase(
            getMovies.rejected,
            (state, action) =>{
                state.loading = false;
                state.error = action.error.message || "Не удалося загрузить фильмы";
            }
        )
        .addCase(getMoviesById.fulfilled,
            (state, action: PayloadAction<IMoviesDetails>) =>{
            state.selectedMovieId = action.payload
            }
            )
        .addCase(
            getMoviesVideosById.fulfilled,
            (state, action: PayloadAction<IVideoResults[]>) =>{
                state.videosResponse = action.payload
            }

        )
        .addCase(searchMovies.fulfilled,
            (state, action: PayloadAction<IMoviesResults[]>) =>{
                state.searchResults = action.payload
            }
        )
})

export const {clearSearchResults} = movieSlice.actions;