import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch } from "../../redux/hooks/useAppDispathc.ts";
import { useAppSelector } from "../../redux/hooks/useAppSelector.ts";

import { getMovies, searchMovies } from "../../service/service.api.movies.ts";
import { getGenres } from "../../service/service.api.movies.genre.ts";
import { setGenresClosed } from "../../redux/slices/genreSlice.ts";
import { clearSearchResults } from "../../redux/slices/movieSlice.ts";

import { MoviesListCard } from "../MoviesListCard/MoviesListCard.tsx";
import { GenreBadge } from "../GenreBadge/GenreBadge.tsx";

import './movies-list-style.css';

export const MoviesList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [q, setQ] = useState('');
    const [query] = useSearchParams({ page: '1' });
    const currentPage = query.get('page');

    const dispatch = useAppDispatch();
    const { loading, error, movies, searchResults } = useAppSelector(state => state.movieSlice);
    const { genres, selectedGenreId } = useAppSelector(state => state.genreSlice);

    useEffect(() => {
        dispatch(getMovies(currentPage || '1'));
    }, [currentPage]);

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    const handleCloseReset = () => {
        dispatch(setGenresClosed());
        setIsOpen(!isOpen);
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setQ(query);
        const trimmed = query.trim();

        if (trimmed.length > 0) {
            dispatch(searchMovies(trimmed));
        } else {
            dispatch(clearSearchResults());
        }
    };

    const displayedMovies = searchResults.length > 0 ? searchResults : movies;

    const filteredFilms = typeof selectedGenreId === 'number'
        ? displayedMovies.filter(movie => movie.genre_ids.includes(selectedGenreId))
        : displayedMovies;

    return (
        <>
            <div className="filters-bar">
                <button className="dropdown-danger-toggle" onClick={handleCloseReset}>
                    All Genres
                </button>

                {isOpen && (
                    <div className="genres-list">
                        {genres.map((genre) => (
                            <GenreBadge genre={genre} key={genre.id} />
                        ))}
                    </div>
                )}

                <input
                    type="search"
                    placeholder="Search by title"
                    value={q}
                    onChange={handleSearch}
                    className={`search-input`}
                />
            </div>

            <div className="MoviesList">
                {loading && <p>Загрузка фильмов...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {filteredFilms.length > 0 ? (
                    filteredFilms.map(movie => (
                        <MoviesListCard movie={movie} key={movie.id} />
                    ))
                ) : (
                    <p>Фильмы не найдены</p>
                )}
            </div>
        </>
    );
};
