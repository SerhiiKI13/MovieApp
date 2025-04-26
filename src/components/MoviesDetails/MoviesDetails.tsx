import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispathc.ts";
import {useEffect} from "react";
import {getMoviesById, getMoviesVideosById} from "../../service/service.api.movies.ts";
import {Header} from "../Header/Header.tsx";
import {PosterPreview} from "../PosterPreview/PosterPreview.tsx";
import {GenreBadge} from "../GenreBadge/GenreBadge.tsx";
import {StarsRating} from "../StarsRating/StarsRating.tsx";
import './movies-details.css'

export const MoviesDetails = () => {
    const {id} = useParams();
    const {selectedMovieId,videosResponse} = useAppSelector(state => state.movieSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id){
            dispatch(getMoviesById(id));
            dispatch(getMoviesVideosById(+id))
        }
    }, []);
    return (
        <div className="movies-details-wrapper">
            <div className="header-block">
                <Header />
            </div>

            <div className="movie-details-container">
                {selectedMovieId ? (
                    <>
                    <div className="details-layout">
                        <div className="poster-block">
                            <PosterPreview img={selectedMovieId.poster_path} />
                        </div>

                        <div className="info-block">
                            <h1>{selectedMovieId.title}</h1>
                            <p><i>{selectedMovieId.tagline}</i></p>
                            <StarsRating rating={selectedMovieId.vote_average} />

                            <div className="genres-container">
                                {selectedMovieId.genres.map((genre) => (
                                    <GenreBadge key={genre.id} genre={genre} />
                                ))}
                            </div>

                            <p><b>Overview:</b> {selectedMovieId.overview}</p>
                            <p><b>Release date:</b> {selectedMovieId.release_date}</p>
                            <p><b>Runtime:</b> {selectedMovieId.runtime} minutes</p>
                            <p><b>Original title:</b> {selectedMovieId.original_title}</p>
                            <p><b>Language:</b> {selectedMovieId.original_language}</p>
                            <p><b>Status:</b> {selectedMovieId.status}</p>
                            <p><b>Budget:</b> ${selectedMovieId.budget.toLocaleString()}</p>
                            <p><b>Revenue:</b> ${selectedMovieId.revenue.toLocaleString()}</p>
                            <p><b>Production countries:</b> {selectedMovieId.production_countries.map(c => c.name).join(", ")}</p>
                            <p><b>Spoken languages:</b> {selectedMovieId.spoken_languages.map(l => l.name).join(", ")}</p>
                            <p><b>IMDB:</b> <a href={`https://www.imdb.com/title/${selectedMovieId.imdb_id}`} target="_blank" rel="noreferrer">{selectedMovieId.imdb_id}</a></p>

                            {selectedMovieId.homepage && (
                                <p><b>Homepage:</b> <a href={selectedMovieId.homepage} target="_blank" rel="noreferrer">{selectedMovieId.homepage}</a></p>
                            )}
                        </div>
                    </div>
                    {videosResponse.length > 0 && (
                            <div className="trailer-block">
                                <h2>Trailer</h2>
                                <iframe
                                    src={`https://www.youtube.com/embed/${videosResponse[0].key}`}
                                    title={videosResponse[0].name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="error-message">
                        <h2>Возникли некоторые неполадки с сервером, попробуйте позже</h2>
                    </div>
                )}
            </div>
        </div>
    );
};