import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Heart.module.css";
import { subsActions } from "../reducer/subsReducer";

function Heart({ id, title, coverImage }) {
    
    const [subscribing, setSubscribing] = useState(false); // 구독중
    const subs = useSelector(state => state.subs); // 구독중인 
    const dispatch = useDispatch();

    // 가져온 영화가 구독중인 영화인지 체크하기
    const subsCheck = () => {
        if (subs.find((state) => state.id === parseInt(id))) {
            setSubscribing(true);
        }
    }
    useEffect(() => {
        subsCheck();
    }, [id])

    // 구독(하트)누르면...
    const subsClick = () => {
        if (subscribing) { // 구독중이면 구독해제
            dispatch(subsActions.remove({ id }));
        } else { // 구독중이 아니면 구독하기
            dispatch(subsActions.add({ id, title, coverImage }));
        }
        setSubscribing(!subscribing); // 구독중 상태 바꾸기
    }
    return (
        <span
            onClick={subsClick}
            className={subscribing ? styles.red_heart : styles.gray_heart}>
            ♥</span>
    )
}

export default Heart;