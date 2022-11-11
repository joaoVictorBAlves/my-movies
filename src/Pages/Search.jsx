import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css"

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

     // Function to get the top movieas data from API
     const getSearchedMovies = async (url) => {
        // Fecth in the API
        const res = await fetch(url);
        // Convert data in JSON
        const data = await res.json();
        setMovies(data.results);
    }

    // Whenever the page reloads execute this block
    useEffect(() => {
        const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
        getSearchedMovies(searchWithQueryUrl);
    }, [query]);

    return ( 
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}
 
export default Search;