import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie}) => {
    return (
        <p key={movie.id}>{movie.title}</p>
    );
}
 
export default MovieCard;