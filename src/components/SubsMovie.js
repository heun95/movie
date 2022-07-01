import { Link } from "react-router-dom";
import Heart from "./Heart";
import styles from "./SubsMovie.module.css";

function SubsMovie({ id, coverImg, title }) {
  console.log('id, coverImg, title: ', id, coverImg, title);
  
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
          <Heart
            id={id}
            title={title}
            coverImage={coverImg}
          />
        </h2>
      </div>
    </div>
  );
}

export default SubsMovie;