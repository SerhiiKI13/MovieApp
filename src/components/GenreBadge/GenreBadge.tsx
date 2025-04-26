import {IGenres} from "../../models/IGenresModels/IGenresMain.ts";
import {FC} from "react";
import './genre-badge.css'
import {useAppDispatch} from "../../redux/hooks/useAppDispathc.ts";
import {setGenres} from "../../redux/slices/genreSlice.ts";
type GenreProps = {
    genre: IGenres
}
export const GenreBadge: FC<GenreProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const handleClick = (id:number) =>{
    dispatch(setGenres(id))
    }
    return (
        <><span  className="genre-badge" onClick={() =>{handleClick(genre.id)}}>{genre.name}</span></>
    );
};