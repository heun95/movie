import React from "react"
import { useSelector } from "react-redux";
import SubsMovie from "../components/SubsMovie";
import styles from "../components/SubsMovie.module.css";

function Subscribe() {
    const subs = useSelector(state => state.subs);
    console.log(subs)
    return (
        <div className={styles.container}>
            <div className={styles.movies}>
                {subs.map((state, index) =>
                    <SubsMovie
                        key={index}
                        id={state.id}
                        coverImg={state.coverImage}
                        title={state.title}
                    />
                )}
            </div>
        </div>
    )
}

export default Subscribe;