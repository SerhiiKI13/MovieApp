export const PosterPreview = ({img}: {img : string}) => {
    return (
        <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="PosterPreview"/>
    );
};