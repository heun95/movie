import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { subsActions } from "../reducer/subsReducer";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";
import Heart from "../components/Heart";

function Detail() {
    const { id } = useParams(null);
    const [movie, setMovie] = useState(null); // 선택한 영화 디테일

    // id에 해당하는 영화 리스트 가져오기
    const { data, loading, error } = useAxios(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    useEffect(() => {
        if (data) {
            setMovie(data.data.movie);
        }
    }, [loading]);

    return (
        <div>
            {loading && <span>loading</span>}
            {!loading && error && <span>{error}</span>}
            {!loading && movie &&
                <div className={styles.movie}>
                    <img src={movie.medium_cover_image} alt="" />
                    <div className={styles.content} >
                        <h1 id={movie.id}>
                            {movie.title_long} 
                            <Heart 
                                id={movie.id}
                                title={movie.title}
                                coverImage={movie.medium_cover_image}
                            />
                        </h1>
                        <p>{movie.description_full}</p>
                        <p>{movie.genres.map(gen => `${gen} `)}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Detail;