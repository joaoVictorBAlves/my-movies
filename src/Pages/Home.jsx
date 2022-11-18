import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css"

// get the API access data
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    // Use State with to The Top Movies data
    const [topMovies, setTopMovies] = useState([]);

    // Function to get the top movieas data from API
    const getTopRatedMovies = async (url) => {
        // Fecth in the API
        const res = await fetch(url);
        // Convert data in JSON
        const data = await res.json();
        setTopMovies(data.results);
    } 

    // Whenever the page reloads execute this block
    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    }, []);

    // Return some JSX with the Page Component
    return (
        <div className="container">
            <h2 className="title">Melhores filmes</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}

export default Home;