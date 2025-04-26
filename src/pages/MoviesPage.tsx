import {MoviesList} from "../components/MoviesList/MoviesList.tsx";
import {Header} from "../components/Header/Header.tsx";
import './movies-page-style.css'
import {Pagination} from "../components/pagination/Pagination.tsx";
export const MoviesPage = () => {
    return (
        <div className="movies-page">
           <div className={'menu-main'}> <Header/></div>
        <div className={'content'}><MoviesList/>
        <Pagination/>
        </div>
        </div>
    );
};