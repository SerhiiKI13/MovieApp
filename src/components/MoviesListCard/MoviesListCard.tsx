import {FC} from "react";
import {IMoviesResults} from "../../models/ImoviesResults.ts";
import {PosterPreview} from "../PosterPreview/PosterPreview.tsx";
import {MovieInfo} from "../MovieInfo/MovieInfo.tsx";
import './movie-list-card-style.css'
import {useNavigate} from "react-router-dom";
type MoviesListCardProps = {
    movie: IMoviesResults
}

export const MoviesListCard: FC<MoviesListCardProps> = ({movie}) => {
    const navigate =useNavigate();
    const truncateText = (text: string, maxLenght: number)=>{
        if (!text) return "";
        return text.length > maxLenght ? text.slice(0,maxLenght) + '...': text;
    }

    const clickMovieDetails = (id: number) =>{
        navigate('/movies/' + id)
    }
    return (
        <div className={'movie-card'} onClick={() =>{clickMovieDetails(movie.id)}}>
            <PosterPreview img={movie.poster_path}/>
            <h3>{movie.title}</h3>
            <MovieInfo overview={truncateText(movie.overview, 100)}  date={movie.release_date} badges={movie.genre_ids} />
        </div>
    );
};