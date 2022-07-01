import { useEffect, useState } from 'react';
import Movie from '../components/movie';
import styles from "./Home.module.css";
import useAxios from '../hooks/useAxios';

function Home() {
    const [movies, setMovies] = useState([]);
    const { data, loading, error } = useAxios(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    useEffect(() => {
        if (data) {
            setMovies(data.data.movies);
        }
    }, [loading]);

    return (
        <div className={styles.container}>
            {loading && <span>loading</span>}
            {!loading && error && <span>{error}</span>}
            {!loading && movies &&
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            }
        </div>
    );
}

export default Home;