import { FaRegStar, FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
    let i = 0;
    const total = 5;
    const stars = Array.from({ length: total }, (_, index) => <FaRegStar key={`star-empty-${index}`} />);

    for (i = 0; i < rating; i++) {
        stars[i] = <FaStar key={`star-rating-${i}`} />
    }

    return <div className="star-rating">{stars}</div>;
}

export default StarRating