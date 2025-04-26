import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "./urls.ts";
import {IGenresMain} from "../models/IGenresModels/IGenresMain.ts";

export const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
   async (_,thunkAPI) =>{
        const {data} = await axiosInstance.get<IGenresMain>('/genre/movie/list');
        return thunkAPI.fulfillWithValue(data.genres)
    }

)