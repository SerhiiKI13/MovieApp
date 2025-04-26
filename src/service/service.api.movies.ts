import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "./urls.ts";
import {IMoviesModelsMainResponse} from "../models/IMoviesModelsMainResponse.ts";
import {IVideoResponse} from "../models/IMoviesDetails/IVideoResponse.ts";

export const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
   async (page: string, thunkAPI) =>{
           const {data} = await axiosInstance.get<IMoviesModelsMainResponse>('/discover/movie?page=' + page);
         return  thunkAPI.fulfillWithValue(data.results)
    }

);


export const getMoviesById = createAsyncThunk(
    'movieSlice/getMoviesById',
    async (id: string, thunkAPI) =>{
        const {data} = await axiosInstance.get('/movie/' + id);
        return  thunkAPI.fulfillWithValue(data)
    }

);

export const getMoviesVideosById = createAsyncThunk(
    'movieSlice/getMoviesVideosById',
    async (id: number, thunkAPI) =>{
        const {data} = await axiosInstance.get<IVideoResponse>(`/movie/${id}/videos`);
        return  thunkAPI.fulfillWithValue(data.results)
    }

);

export const searchMovies = createAsyncThunk(
    'movieSlice/searchMovies',
    async   (query: string, thunkAPI) => {
        const {data} = await axiosInstance.get<IMoviesModelsMainResponse>('/search/movie?query=' + query);
        return thunkAPI.fulfillWithValue(data.results)
    }

)