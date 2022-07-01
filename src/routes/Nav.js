import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
function Nav() {
    return (
        <div className={styles.container}>
            <nav >
                <Link className={styles.link} to="/">home </Link>
                <Link className={styles.link} to="/subscribe">subscribe</Link>
            </nav>
        </div>
    )
}

export default Nav;