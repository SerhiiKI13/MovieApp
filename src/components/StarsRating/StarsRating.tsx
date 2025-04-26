import StarRatings from 'react-star-ratings';

export const StarsRating = ({rating}:{rating: number}) => {
    return (
        <StarRatings
            rating={rating / 2}
            starRatedColor="gold"
            numberOfStars={5}
            name='rating'
        />
    );
};