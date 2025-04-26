import {useSearchParams} from "react-router-dom";
import './pagination-style.css';

export const Pagination = () => {
    const [query, setQery] = useSearchParams({ page: '1' });
   const currentPage = Number(query.get('page'));

    const handlePrev = () => {
        if (currentPage > 1) {
            setQery({ page: (currentPage - 1).toString() });
        }
    };

    const handleNext = () => {
        setQery({ page: (currentPage + 1).toString() });
    };
    return (
        <div className="pagination-buttons">
            <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};
