import {FC} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {GenreBadge} from "../GenreBadge/GenreBadge.tsx";
import './movie-info-style.css'

type MovieInfoProps = {
    overview: string;
    date: string;
    badges: number[];
}
export const MovieInfo: FC<MovieInfoProps> = ({overview, date, badges}) => {
    const {genres} =useAppSelector(state => state.genreSlice)
    const dateYear = new Date('2024-05-13');
    const movieDate = new Date(date);
    return (
        <div className="movie-info">
            <p className="overview">{overview}</p>

            {movieDate > dateYear && (
                <h3 className="new-badge">#New</h3>
            )}

            <div className="genres-list">
                {badges.map(valueId => {
                    const genre = genres.find(g => g.id === valueId);
                    return genre ? <GenreBadge genre={genre} key={genre.id} /> : null;
                })}
            </div>
        </div>
    );
};